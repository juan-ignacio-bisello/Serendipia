import { collection, getDocs } from 'firebase/firestore';
import { FirebaseBD } from '../../DB/firebaseConfig';
import { signInWithGoogle } from '../../DB/provider';
import { setProducts } from '../ui/productSlice';
import { onChecking, onLogin, onLogout } from './authSlice';


export const checkingAuthentification = ( email, password ) => {
  
    return async( dispatch ) => {

        dispatch( onChecking() );

  }
}

export const startGoogleSingin = () => {
    return async( dispatch ) => {
        dispatch( onChecking() );

        const result = await signInWithGoogle();
        if ( result.ok ) {
          dispatch( onLogin( result ) );
        } else {
          dispatch( onLogout( result.errorMessage ) );
        }
    }
}

export const startLoadingProducts = () => {
    return async (dispatch) => {
      const productsRef = collection(FirebaseBD, 'productos');
      const docs = await getDocs(productsRef);
      const products = docs.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      dispatch(setProducts(products));
    };
  };

