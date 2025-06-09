import { Routes, Route, useLocation } from 'react-router-dom';
import { HomePage, Navbar, ProductHandler } from '../commerce';
import { AuthRoutes } from '../auth';
import { AnimatePresence } from 'framer-motion';
import { PrivateRoute } from './PrivateRoute';
import { useEffect } from 'react';
import { useAuthStore } from '../hooks';

export const AppRouter = () => {

    const location = useLocation();
    const { checkAuthToken } = useAuthStore();
    
    useEffect(() => {
      checkAuthToken();
    }, []);

    return (
        <AnimatePresence mode='wait'>
            <Navbar />
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
