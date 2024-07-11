import React, { useState } from 'react';
import { CartWidget } from './CartWidget';
// import { SearchBar } from './SearchBar';

export const Header = () => {

  return (
    <header className="flex py-5 justify-center items-center w-[1120px]">
        <span></span>
        <nav className='flex flex-row justify-center items-center gap-x-10 opacity-80 '>
            <li className='flex flex-row justify-center items-center'>
              <img className='mr-3 h-6 sm:h-9 rounded-full flex' src="../public/logo.jpg" alt="logo serendipia e-commerce ecommerce" />
              <h1 className='flex' >Serendipia</h1>
            </li>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/projects">Productos</a>
            <a href="/contact">Contact</a>
        </nav>
        <CartWidget />
    </header>
    
  )
}
