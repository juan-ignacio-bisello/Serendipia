import { useAuthStore } from '../../hooks/useAuthStore';
import { CartWidget } from './CartWidget';
import { Logo } from './Logo';

export const Navbar = () => {

  const { startLogout, startLogin } = useAuthStore();
  
  return (
    <div className='flex items-center justify-between  py-4 px-5'>
      <div className='flex flex-1 min-w-fit'>
        <Logo />
      </div>

      <div className='flex items-center justify-between w-full py-4 px-5'>
        <div className='flex-1 flex justify-center gap-x-4'>
          <button className='px-4 py-2 '>Home</button>
          <button className='px-4 py-2'>Category</button>
          <button className='px-4 py-2'>Productos</button>
        </div>

        <div className='flex-1 flex justify-end items-center gap-x-4'>
          <button 
            className='px-4 py-2'
            onClick={ startLogin }
          >
            Login
          </button>
          <button 
            className='px-4 py-2'
            onClick={ startLogout }
          >
            Signin
          </button>
          <CartWidget />
        </div>
      </div>
      
    </div>
  )
}
