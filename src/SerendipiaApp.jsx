import { ListItem, Navbar } from './components';


export const SerendipiaApp = () => {
  console.log('SerendipiaApp');
  return (
    <>
      <Navbar />
      <ListItem 
        image="public\ropa\pan1.jpg"
        title="Producto de ejemplo"
        price="29.99"
        onAddToCart={() => console.log("Producto agregado")} 
      />
    </>
    
  )
}
