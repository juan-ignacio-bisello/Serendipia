import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
  
    const { status } = useSelector( state => state.auth );

    if ( status !== 'authenticated-ADMIN' ) {
        return <Navigate to="/*" />
    }

    return children;
}
