import { Routes, Route, useLocation } from 'react-router-dom';
import { useAuthStore } from '../hooks/useAuthStore';
import { HomePage } from '../commerce';
import { AuthRoutes } from '../auth';
import { AnimatePresence } from 'framer-motion';

export const AppRouter = () => {

    const { status } = useAuthStore();
    const location = useLocation();

    // if ( status === 'checking' ) {
    //     return <h3>Cargando...</h3>;
    // }

    return (
        <AnimatePresence mode='wait'>
            <Routes location={ location } key={ location.pathname }>
                <Route path="/auth/*" element={<AuthRoutes />} />
                <Route path="/*" element={<HomePage />} />
            </Routes>
        </AnimatePresence>
        
    );
}
