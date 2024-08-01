import React from 'react';
import { Header } from './src/components/Header';
import { CartWidget } from './src/components/CartWidget';
import { BigProductItem } from './src/components/BigProductItem';
import { ItemDetail } from './src/components/ItemDetail';

export const SerendipiaApp = () => {
  return (
    <>
      <Header />
      <CartWidget className='flex flex-row justify-end' />
      {/* <BigProductItem /> */}
      <ItemDetail />
    </>
    
  )
}
