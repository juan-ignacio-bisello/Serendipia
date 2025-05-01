import { useDispatch } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { startGoogleSingin } from "../../store";


const registerFormFields = {
    registerName:      '',
        registerEmail:     '',
        registerPassword:  '',
    registerPassword2: '',
}

export const RegisterPage = () => {

    const dispatch = useDispatch();

    const { 
        registerName,
        registerEmail,
        registerPassword,
        registerPassword2,
        onInputChange: onInputChangeReg 
    } = useForm(registerFormFields);

    const onSubmit = ( event ) => {
            event.preventDefault();
    
            dispatch( checkingAuthentification() );
    }

    const onGoogleSingin = () => {
        dispatch( startGoogleSingin() );
    }

  return (
    <>
        <div className="flex-row"> 
            <h3 className="text-White text-2xl">Registro</h3>
            <form>
              <div className="mb-2">
                <input
                  type="text"
                  className="text-gray-500"
                  placeholder="Nombre"
                  name="registerName"
                  value={registerName}
                  onChange={onInputChangeReg}
                />
              </div>
              <div className="flex mb-2">
                <input
                  type="email"
                  className="text-gray-500"
                  placeholder="Correo"
                  name="registerEmail"
                  value={registerEmail}
                  onChange={onInputChangeReg}
                />
              </div>
              <div className="flex mb-2">
                <input
                  type="password"
                  className="text-gray-500"
                  placeholder="Contraseña"
                  name="registerPassword"
                  value={registerPassword}
                  onChange={onInputChangeReg}
                />
              </div>
              <div className="flex mb-2">
                <input
                  type="password"
                  className="text-gray-500"
                  placeholder="Repita la contraseña"
                  name="registerPassword2"
                  value={registerPassword2}
                  onChange={onInputChangeReg}
                />
              </div>
              <div className="flex mb-2">
                <button 
                  type="submit" 
                  className="flex px-4 py-2 w-full justify-center text-lg"
                >
                  Register
                </button>
              </div>
              
            </form>
                
            </div>
            <div className="flex mb-2 pt-5">
                    <button 
                      className="flex px-4 py-2 w-full justify-center text-lg"
                      onClick={ onGoogleSingin }
                    >
                      Google
                    </button>
            </div>
    </>
  )
}
