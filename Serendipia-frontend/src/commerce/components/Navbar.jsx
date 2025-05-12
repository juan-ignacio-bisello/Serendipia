import { useNavigate } from 'react-router-dom';
import { CartWidget } from './CartWidget';
import { Logo } from './Logo';
import { useAuthStore } from '../../hooks/useAuthStore';

export const Navbar = () => {

  const navigate = useNavigate();

  const handleHome = () => {
    navigate('/');
  };
  const handleLogin = () => {
    navigate('/auth/login');
  };

  const handleRegister = () => {
    navigate('/auth/register');
  };

  const handlerAdmin = () => {
    navigate('/product/add/*');
  }

  const handlerBuzos = () => {
    navigate('/product/buzos/*');
  }

  const handlerRemeras = () => {
    navigate('/product/remeras/*');
  }

  const handlerPantalones = () => {
    navigate('/product/pantalones/*');
  }
  
  const { status } = useAuthStore();
  
  return (
    <div className='flex items-center justify-between  py-4 px-5'>
      <div className='flex flex-1 min-w-fit'>
        <Logo />
      </div>

      <div className='flex items-center justify-between w-full py-4 px-5'>
        <div className='flex-1 flex justify-center gap-x-4'>
          <button className='px-4 py-2' onClick={ handleHome }>Home</button>
          <button className='px-4 py-2' onClick={ handlerBuzos }>Buzos</button>
          <button className='px-4 py-2' onClick={ handlerRemeras }>Remeras</button>
          <button className='px-4 py-2' onClick={ handlerPantalones }>Pantalones</button>
        </div>
        
        {
          ( status === 'authenticated-ADMIN' ) ? (
            <div className='flex-1 flex justify-center sm:ml-4 items-center gap-x-4'>
              <button className='px-4 py-2 ' onClick={ handlerAdmin }>
                ADMIN
              </button>
            </div> )
            : <div></div>
        }
        

        <div className='flex-1 flex justify-end sm:ml-4 items-center gap-x-4'>
          <button 
            className='px-4 py-2'
            onClick={ handleLogin }
          >
            Login
          </button>
          <button 
            className='px-4 py-2'
            onClick={ handleRegister }
          >
            Signin
          </button>
          <CartWidget />
        </div>
      </div>
      
    </div>
  )
}
