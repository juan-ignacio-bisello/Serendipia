import { Routes, Route, Navigate } from 'react-router-dom'
import { LoginPage } from '../auth/pages/LoginPage'
import { useAuthStore } from '../hooks/useAuthStore'

export const AppRouter = () => {

    const { status } = useAuthStore();

    if ( status === 'checking' ) {
        return (
          <h3>Cargando...</h3>
        )
    }

    return (
        <Routes>
            <Route path="/auth/*" element={ <LoginPage /> } />
            <Route path='/*' element={ <Navigate to="/auth/login" />} />
        </Routes>
    )
}
