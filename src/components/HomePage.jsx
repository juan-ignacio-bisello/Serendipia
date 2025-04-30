import { ListItem, Navbar } from "./";


export const HomePage = () => {
    console.log('SerendipiaApp');
    
    return (
    <>
        <Navbar />
        <ListItem
          image="public\ropa\pan1.jpg"
          title="Producto de ejemplo"
          price="29.99"
        />
    </>
  )
}
