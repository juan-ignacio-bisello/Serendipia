import { singInWhithGoogle } from "../../DB/provider";
import { onChecking } from "./authSlice";


export const checkingAuthentification = ( email, password) => {
  
    return async( dispatch ) => {

        dispatch( onChecking() );

  }
}

export const startGoogleSingin = async() => {
    return async( dispatch ) => {
        dispatch( onChecking() );

        const results = await singInWhithGoogle();
    }
}
