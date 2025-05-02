import { useNavigate } from 'react-router-dom';
import { CartWidget } from './CartWidget';
import { Logo } from './Logo';

export const Navbar = () => {

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/auth/login');
  };

  const handleRegister = () => {
    navigate('/auth/register');
  };
  
  return (
    <div className='flex items-center justify-between  py-4 px-5'>
      <div className='flex flex-1 min-w-fit'>
        <Logo />
      </div>

      <div className='flex items-center justify-between w-full py-4 px-5'>
        <div className='flex-1 flex justify-center gap-x-4'>
          <button className='px-4 py-2 '>Home</button>
          <button className='px-4 py-2'>Buzos</button>
          <button className='px-4 py-2'>Remeras</button>
          <button className='px-4 py-2'>Pantalones</button>
        </div>

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
