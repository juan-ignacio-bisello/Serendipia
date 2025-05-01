import { AlsoListItem, Navbar } from "../"
import { Banner } from "../components/Banner"



export const HomePage = () => {
  

  
  return (
  <>
      <Navbar />
      <Banner />
      <AlsoListItem
        image="public\ropa\pan1.jpg"
        title="Producto de ejemplo"
        price="29.99"
      />
  </>
  )
}
