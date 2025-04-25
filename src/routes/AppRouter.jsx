import { Routes, Route, Navigate } from 'react-router-dom';
import { LoginPage } from '../auth/pages/LoginPage';
import { useAuthStore } from '../hooks/useAuthStore';
import { SerendipiaApp } from '../SerendipiaApp';

export const AppRouter = () => {

    // const { status } = useAuthStore();

    const authStatus = 'not-authenticated';

    if ( authStatus === 'checking' ) {
        return (
          <h3>Cargando...</h3>
        )
    }

    return (
        <Routes>
            {
                ( authStatus === 'not-authenticated' ) 
                ? <Route path="/auth/*" element={ <LoginPage /> } />
                : <Route path="/*" element={ <SerendipiaApp /> } />
            }
            
            {/* <Route path='/*' element={ <Navigate to="/auth/login" />} /> */}
        </Routes>
    )
}
