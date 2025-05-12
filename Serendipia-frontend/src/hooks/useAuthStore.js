import { useDispatch, useSelector } from 'react-redux';
import { clearErrorMessage, onLogout } from '../store';

export const useAuthStore = () => {

  const { status, user, errorMessage } = useSelector( state => state.auth );
  const dispatch = useDispatch();

  const startLogin = ({ email, password }) => {
    console.log('startLogin');
    dispatch( onChecking() );

    try {
      
    } catch (error) {
      console.log(error);
      dispatch( onLogout('Credenciales incorrectas'));

      setTimeout(() => {
          dispatch( clearErrorMessage() );
      }, 10);
    }
  }

  const startRegister = ({ email, password, name }) => {
    console.log('startLogin');
    dispatch( onChecking() );

    try {
      
    } catch (error) {
      console.log(error);
      dispatch( onLogout('Credenciales incorrectas'));

      setTimeout(() => {
          dispatch( clearErrorMessage() );
      }, 10);
    }
  }

  const startLogout = () => {
    localStorage.clear();
    console.log('startLogout');
    dispatch( onLogout() );
  }


  return { 
    // Properties
    status, 
    user, 
    errorMessage,

    // Method
    startLogin,
    startRegister,
    startLogout,
  }
}
