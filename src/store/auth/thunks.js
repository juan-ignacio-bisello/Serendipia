import { onChecking } from "./authSlice";


export const checkingAuthentification = ( email, password) => {
  
    return async( dispatch ) => {

        dispatch( onChecking() );

  }
}

export const startGoogleSingin = () => {
    return async( dispatch ) => {
        dispatch( onChecking() );
    }
}
