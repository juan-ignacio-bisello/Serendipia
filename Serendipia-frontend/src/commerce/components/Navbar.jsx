import { useNavigate } from 'react-router-dom';
import { CartWidget } from './CartWidget';
import { Logo } from './Logo';
import { useAuthStore, useProductStore } from '../../hooks';
import { SideBar } from './SideBar';

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

      <div className='hidden md:flex-1 md:flex justify-center items-center md:gap-x-6 gap-x-1'>
        <button className='h-8 md:px-4 md:py-2' onClick={ handleHome }>Home</button>
        <button className='h-8 md:px-4 md:py-2' onClick={ () => handlerFilter('Buzos') }>Buzos</button>
        <button className='h-8 md:px-4 md:py-2' onClick={ () => handlerFilter('Remeras') }>Remeras</button>
        <button className='h-8 md:px-4 md:py-2' onClick={ () => handlerFilter('Pantalones') }>Pantalones</button>
      </div>
      
      <div className='flex items-center md:gap-x-4 gap-x-1'>  
        {
          status === 'authenticated' && role === 'authenticated-ADMIN' && (
          <div className='flex-1 flex justify-center ml-4 items-center md:gap-x-4'>
            <button className='h-8 md:px-4 md:py-2' onClick={ handlerAdmin }>
              ADMIN
            </button>
          </div>
        )}
        

        <div className='flex-1 flex justify-end items-center md:gap-x-4 gap-x-1'>
          <div className='hidden sm:flex'>
            {
              ( status !== 'authenticated' )
              ? (
                <div className='flex-1 flex justify-end ml-4 items-center md:gap-x-4'>
                  <button 
                    className='h-8 w-8 md:px-4 md:py-2'
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
                  className='h-8 w-8 md:px-4 md:py-2'
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
          </div>
          <CartWidget />
          <SideBar />
        </div>
      </div>
      
    </div>
  )
}
