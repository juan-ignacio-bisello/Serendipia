import { useDispatch } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { checkingAuthentification } from "../../store";


const loginFormFields = {
    loginEmail: '',
    loginPassword: '',
}

export const LoginPage = () => {

    const { email, password, onInputChange } = useForm(loginFormFields);

    const dispatch = useDispatch();

    const onSubmit = ( event ) => {
        event.preventDefault();

        dispatch( checkingAuthentification() );
    }

    return (
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
                                className="flex px-4 py-2 w-full justify-center text-lg text-Lime bg-Fuchsia"
                            >Login</button>
                        </div>
                    </form>
                </div>

                
            </div>
        </div>
    )
}