import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartWidget } from './CartWidget';
import { Logo } from './Logo';
import { useAuthStore } from '../../hooks';

export const Navbar = () => {

  const navigate = useNavigate();
  
  const { status, user, startLogout } = useAuthStore();
  const role = user?.role;

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
    // Check if the user is authenticated as ADMIN
    // If authenticated, navigate to the admin page
      
      if ( status === 'authenticated' && role === 'authenticated-ADMIN' ) {
          return navigate('/product/add/*');
        } else {
          // If not authenticated as ADMIN, redirect to home
          console.log('No tienes permisos de administrador');
          // Optionally, you can show an alert or message to the user
          alert('No tienes permisos de administrador');
          return navigate('/');
        }
    
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
          status === 'authenticated' && role === 'authenticated-ADMIN' && (
          <div className='flex-1 flex justify-center sm:ml-4 items-center gap-x-4'>
            <button className='px-4 py-2 ' onClick={handlerAdmin}>
              ADMIN
            </button>
          </div>
        )}
        

        <div className='flex-1 flex justify-end sm:ml-4 items-center gap-x-4'>
          {
            ( status !== 'authenticated' )
            ? (
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
              </div>
            )
            : (
              <button
                className='px-4 py-2'
                onClick={ () => {
                    startLogout();
                    navigate('/');
                  }
                }
              >
                Logout
              </button>
            )
          }
          <CartWidget />
        </div>
      </div>
      
    </div>
  )
}
