import { CartWidget } from './CartWidget';
import { Logo } from './Logo';

export const Navbar = () => {
  return (
    <div className='inline-flex justify-start items-center w-11/12 h-28 py-4 pl-5' >
      <div className='flex'>
        <Logo className='flex items-start gap-x-10' />
        <span></span>
        <div className='inline-flex flex-row gap-x-4 items-center pl-5'>
          <button className='transition ease-in-out delay-150 duration-250 hover:-translate-y-1 hover:scale-110 rounded-full bg-Lime hover:opacity-85 hover:shadow-2xl' href="/">Home</button>
          <button className='transition ease-in-out delay-150 duration-250 hover:-translate-y-1 hover:scale-110 rounded-full bg-Lime hover:opacity-85 hover:shadow-2xl' href="/category">Category</button>
          <button className='transition ease-in-out delay-150 duration-250 hover:-translate-y-1 hover:scale-110 rounded-full bg-Lime hover:opacity-85 hover:shadow-2xl' href="/products">Productos</button>
        </div>

        <div className='justify-end justify-items-end inline-flex flex-row items-center'>
          <button
            className='transition ease-in-out delay-150 duration-250 hover:-translate-y-1 hover:scale-110 rounded-full bg-Lime hover:opacity-85 hover:shadow-2xl'
          >
            Login
          </button>
          <button
            className='transition ease-in-out delay-150 duration-250 hover:-translate-y-1 hover:scale-110 rounded-full bg-Lime hover:opacity-85 hover:shadow-2xl'
          >
            Singin
          </button>
        </div>

        <CartWidget className='inline-flex flex-row justify-end' />

      </div>
      
    </div>
  )
}
