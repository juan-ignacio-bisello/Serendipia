import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useForm } from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from '../../hooks/useAuthStore';
import Swal from 'sweetalert2';


const loginFormFields = {
    loginEmail: '',
    loginPassword: '',
}

export const LoginPage = () => {

    const { startLogin, errorMessage } = useAuthStore();
    const { loginEmail, loginPassword, onInputChange } = useForm( loginFormFields );

    const navigate = useNavigate();


    const handleHome = () => {
      navigate('/');
    };

    const handleRegister = () => {
      navigate('/auth/register');
    };


    const onSubmit = ( event ) => {
      event.preventDefault();

      startLogin({
          email: loginEmail,
          password: loginPassword
        });
    }

    useEffect(() => {
      if ( errorMessage && typeof errorMessage === 'string' ) {
        Swal.fire('Error en la autentificación', errorMessage, 'error' );
      }
    }, [errorMessage])
    

    return (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.3 }}
          className="..."
        >
            <div className="flex size-2/3 place-content-center justify-self-center py-24">
                <div className="table-row shadow-xl shadow-Gray justify-between p-28">
                    <div className="flex-row">
                        <h3 className="text-White text-2xl">Ingreso</h3>
                        <form onSubmit={ onSubmit }>
                            <div className="form-group mb-2">
                                <input 
                                    type="text"
                                    className="text-gray-500"
                                    placeholder="Correo"
                                    name="loginEmail"
                                    value={ loginEmail }
                                    onChange={ onInputChange }
                                />
                            </div>
                            <div className="form-group mb-2">
                                <input
                                    type="password"
                                    className="text-gray-500"
                                    placeholder="Contraseña"
                                    name="loginPassword"
                                    value={ loginPassword }
                                    onChange={ onInputChange }
                                />
                            </div>
                            <div>
                                <button 
                                    type="submit"
                                    className="flex px-4 py-2 w-full justify-center text-lg"
                                >Login</button>
                            </div>

                            {/* <button 
                              className="flex mt-12 px-4 py-2 w-full justify-center text-lg"
                              onClick={ onGoogleSingin }
                            >
                              Google
                            </button> */}


                        </form>

                            <div className="flex mt-12 gap-4">
                                <button 
                                  className="flex px-4 py-2 w-full justify-center text-sm bg-Black text-Gray shadow shadow-Pink hover:shadow-lg hover:shadow-Pink"
                                  onClick={ handleHome }
                                >
                                  Home
                                </button>
                                <button 
                                  className="flex px-4 py-2 w-full justify-center text-sm bg-Black text-Gray shadow shadow-Pink hover:shadow-lg hover:shadow-Pink"
                                  onClick={ handleRegister }
                                >
                                  Register
                                </button>
                            </div>

                    </div>


                </div>
            </div>
        </motion.div>
    )
}