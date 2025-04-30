import { CartWidget } from './CartWidget';
import { Logo } from './Logo';

export const Navbar = () => {
  return (
    <div className='flex items-center justify-between w-full py-4 px-5'>
      <div className='flex-1'>
        <Logo />
      </div>

      <div className='flex-1 flex justify-center gap-x-4'>
        <button className='px-4 py-2 text-sm md:text-base text-Fuchsia'>Home</button>
        <button className='px-4 py-2 text-sm md:text-base text-Fuchsia'>Category</button>
        <button className='px-4 py-2 text-sm md:text-base text-Fuchsia'>Productos</button>
      </div>

      <div className='flex-1 flex justify-end items-center gap-x-4'>
        <button className='px-4 py-2 text-sm md:text-base text-Fuchsia'>
          Login
        </button>
        <button className='px-4 py-2 text-sm md:text-base text-Fuchsia'>
          Signin
        </button>
        <CartWidget />
      </div>
    </div>
  )
}
