import { Routes, Route } from 'react-router-dom';
import { useAuthStore } from '../hooks/useAuthStore';
import { LoginPage } from '../auth/pages/LoginPage';
import { HomePage } from '../commerce';
import { AuthRoutes } from '../auth';

export const AppRouter = () => {

    const { status } = useAuthStore();

    if ( status === 'checking' ) {
        return <h3>Cargando...</h3>;
    }

    return (
        <Routes>
            <Route path="/auth/*" element={<AuthRoutes />} />
            <Route path="/*" element={<HomePage />} />
        </Routes>
    );
}
