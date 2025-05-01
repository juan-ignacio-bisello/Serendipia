import { signInWithGoogle } from "../../DB/provider";
import { onChecking, onLogin, onLogout } from "./authSlice";


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

