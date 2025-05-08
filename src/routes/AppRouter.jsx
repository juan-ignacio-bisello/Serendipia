import { Routes, Route, useLocation } from 'react-router-dom';
import { HomePage, ProductHandler } from '../commerce';
import { AuthRoutes } from '../auth';
import { AnimatePresence } from 'framer-motion';
import { useAuthStore } from '../hooks/useAuthStore';
import { PrivateRoute } from './PrivateRoute';

export const AppRouter = () => {

    const { status } = useAuthStore();
    const location = useLocation();

    return (
        <AnimatePresence mode='wait'>
            <Routes location={ location } key={ location.pathname }>
                {/* RUTAS PUBLICAS */}
                <Route path="/auth/*" element={<AuthRoutes />} />
                <Route path="/*" element={<HomePage />} />

                {/* RUTA PRIVADA */}
                <Route 
                    path='/product/add/*' 
                    element={ 
                        <PrivateRoute>
                            <ProductHandler />
                        </PrivateRoute> } 
                />

            </Routes>
        </AnimatePresence>
        
    );
}
