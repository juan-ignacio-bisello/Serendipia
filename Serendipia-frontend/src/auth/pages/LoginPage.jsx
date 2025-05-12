import { useDispatch } from "react-redux";
import { motion } from 'framer-motion';
import { useForm } from "../../hooks/useForm";
import { checkingAuthentification, startGoogleSingin } from "../../store";
import { useNavigate } from "react-router-dom";


const loginFormFields = {
    loginEmail: '',
    loginPassword: '',
}

export const LoginPage = () => {

    const { email, password, onInputChange } = useForm(loginFormFields);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const onGoogleSingin = () => {
             dispatch( startGoogleSingin() );
    }

    const handleHome = () => {
      navigate('/');
    };

    const handleRegister = () => {
        navigate('/auth/register');
    };


    const onSubmit = ( event ) => {
        event.preventDefault();

        dispatch( checkingAuthentification() );
    }

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
                                    name="email"
                                    value={ email }
                                    onChange={ onInputChange }
                                />
                            </div>
                            <div className="form-group mb-2">
                                <input
                                    type="password"
                                    className="text-gray-500"
                                    placeholder="Contraseña"
                                    name="password"
                                    value={ password }
                                    onChange={ onInputChange }
                                />
                            </div>
                            <div>
                                <button 
                                    type="submit"
                                    className="flex px-4 py-2 w-full justify-center text-lg"
                                >Login</button>
                            </div>

                            <button 
                              className="flex mt-12 px-4 py-2 w-full justify-center text-lg"
                              onClick={ onGoogleSingin }
                            >
                              Google
                            </button>


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