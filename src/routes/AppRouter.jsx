import { Routes, Route } from 'react-router-dom';
import { LoginPage } from '../auth/pages/LoginPage';
import { useAuthStore } from '../hooks/useAuthStore';
import { HomePage } from '../components';

export const AppRouter = () => {

    const { status } = useAuthStore();

    if ( status === 'checking' ) {
        return <h3>Cargando...</h3>;
    }

    return (
        <Routes>
            <Route path="/auth/*" element={<LoginPage />} />
            <Route path="/*" element={<HomePage />} />
        </Routes>
    );
}
