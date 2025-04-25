import { CartWidget, Header } from './components';


export const SerendipiaApp = () => {
  console.log('SerendipiaApp');
  return (
    <>
      <Header />
      <CartWidget className='flex flex-row justify-end' />
    </>
    
  )
}
