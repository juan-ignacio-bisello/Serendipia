import { Routes, Route, useLocation } from 'react-router-dom';
import { AdminRoutes, HomePage, Navbar, ProductCategoryPage, ProductModal } from '../commerce';
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
        <>
            <Navbar />
            <ProductModal />
            <AnimatePresence mode='wait'>
            <Routes location={ location } key={ location.pathname }>
                {/* RUTAS PUBLICAS */}
                <Route path="/product/category/:category" element={<ProductCategoryPage />} />
                <Route path="/auth/*" element={<AuthRoutes />} />
                <Route path="/*" element={<HomePage />} />

                {/* RUTA PRIVADA */}
                <Route 
                    path='/product/admin/*' 
                    element={ 
                        <PrivateRoute>
                            <AdminRoutes />
                        </PrivateRoute> } 
                />

            </Routes>
            </AnimatePresence>
        </>
    );
}
