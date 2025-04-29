import { Logo } from './Logo';

export const Navbar = () => {
  return (
    <header className='inline-flex w-11/12 py-4 pl-5' >
      <Logo className='flex items-center gap-x-10 opacity-90' />
      <span></span>
      <nav className='inline-flex flex-row items-center gap-x-10 opacity-90 pt-5 pl-5 w-auto '>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/projects">Productos</a>
        <a href="/contact">Contact</a>
      </nav>
      <button
        className=''
      >
        Login
      </button>
      <button
        className=''
      >
        Singin
      </button>
    </header>
  )
}
