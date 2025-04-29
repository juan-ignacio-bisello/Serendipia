import { CartWidget, ListItem, Navbar } from './components';


export const SerendipiaApp = () => {
  console.log('SerendipiaApp');
  return (
    <>
      <Navbar />
      <CartWidget className='flex flex-row justify-end' />
      <ListItem />
    </>
    
  )
}
