import { Routes, Route, useLocation } from 'react-router-dom';
import { HomePage, ProductHandler } from '../commerce';
import { AuthRoutes } from '../auth';
import { AnimatePresence } from 'framer-motion';

export const AppRouter = () => {

    const location = useLocation();

    return (
        <AnimatePresence mode='wait'>
            <Routes location={ location } key={ location.pathname }>
                <Route path='/product/add/*' element={ <ProductHandler /> } />
                <Route path="/auth/*" element={<AuthRoutes />} />
                <Route path="/*" element={<HomePage />} />
            </Routes>
        </AnimatePresence>
        
    );
}
