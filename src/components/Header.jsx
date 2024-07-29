import React from 'react';
import { Logo } from './Logo';

export const Header = () => {

  return (
    <header className="flex flex-row pt-5 pl-5 justify-start items-center w-4/5">
        <span></span>
        <nav className='flex flex-row justify-center items-center gap-x-10 opacity-80 '>
            <Logo />

            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/projects">Productos</a>
            <a href="/contact">Contact</a>
        </nav>
    </header>
    
  )
}
