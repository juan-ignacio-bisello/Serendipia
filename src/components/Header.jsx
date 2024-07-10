import React from 'react';

export const Header = () => {
  return (
    <header className="flex justify-center items-center py-5 w-[1120px]">
        <span></span>
        <nav className='flex flex-row gap-x-10 opacity-80 '>
          <div className='flex flex-row'>
            <img className='mr-3 h-6 sm:h-9 rounded-full flex' src="../public/logo.jpg" alt="" />
            <h1 className='font-serif flex' >Serendipia</h1>
          </div>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/projects">Productos</a>
            <a href="/contact">Contact</a>
        </nav>

    </header>
    
  )
}
