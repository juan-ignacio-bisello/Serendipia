import { useNavigate } from 'react-router-dom';
import { CartWidget } from './CartWidget';
import { Logo } from './Logo';
import { useAuthStore, useProductStore } from '../../hooks';

export const Navbar = () => {

  const navigate = useNavigate();
  
  const { status, user, startLogout } = useAuthStore();
  const { startLoadingProducts, startLoadingProductsByCategory } = useProductStore();
  const role = user?.role;

  const handleHome = () => {
    navigate('/');
    startLoadingProducts();
  };

  const handlerFilter = ( category ) => {
    handleHome();
    startLoadingProductsByCategory( category );
  }

  const handleRegister = () => {
    navigate('/auth/register');
  };

  const handlerAdmin = () => {
    // Check if the user is authenticated as ADMIN
    // If authenticated, navigate to the admin page
      
      if ( status === 'authenticated' && role === 'authenticated-ADMIN' ) {
          return navigate('/product/admin');
        } else {
          // If not authenticated as ADMIN, redirect to home
          console.log('No tienes permisos de administrador');
          // Optionally, you can show an alert or message to the user
          alert('No tienes permisos de administrador');
          return navigate('/');
        }
    
  }
  
  return (
    <div className='flex items-center justify-between py-2 px-6 bg-white'>
      <div className='flex items-center flex-none'>
        <Logo />
      </div>

      <div className='flex-1 flex justify-center gap-x-6'>
        <button className='px-4 py-2' onClick={ handleHome }>Home</button>
        <button className='px-4 py-2' onClick={ () => handlerFilter('Buzos') }>Buzos</button>
        <button className='px-4 py-2' onClick={ () => handlerFilter('Remeras') }>Remeras</button>
        <button className='px-4 py-2' onClick={ () => handlerFilter('Pantalones') }>Pantalones</button>
      </div>
      
      <div className='flex items-center gap-x-4'>  
        {
          status === 'authenticated' && role === 'authenticated-ADMIN' && (
          <div className='flex-1 flex justify-center sm:ml-4 items-center gap-x-4'>
            <button className='px-4 py-2 ' onClick={ handlerAdmin }>
              ADMIN
            </button>
          </div>
        )}
        

        <div className='flex-1 flex justify-end items-center gap-x-4'>
          {
            ( status !== 'authenticated' )
            ? (
              <div className='flex-1 flex justify-end sm:ml-4 items-center gap-x-4'>
                <button 
                  className='px-4 py-2'
                  onClick={ handleRegister }
                >
                  <span className="material-symbols-outlined flex-1 flex justify-center items-center">
                    account_circle
                  </span>
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
                <span className="material-symbols-outlined flex-1 flex justify-center items-center">
                  logout
                </span>
              </button>
            )
          }
          <CartWidget />
        </div>
      </div>
      
    </div>
  )
}
