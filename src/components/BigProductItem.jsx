import { Carousel } from "flowbite-react";

export const BigProductItem = () => {
  return (
    <div className="sm:h-64 xl:h-80 2xl:h-96 flex-auto h-96 w-auto">
      <Carousel pauseOnHover >
        <img src="../public/ropa/pan1.jpg"  className='object-contain' alt="ropa venta pantalon pantalones"/>
        <img src="../public/ropa/pan2.jpg"  className='object-contain' alt="ropa venta pantalon pantalones"/>
        <img src="../public/ropa/pan3.jpg"  className='object-contain' alt="ropa venta pantalon pantalones"/>
        <img src="../public/ropa/pan4.jpg"  className='object-contain' alt="ropa venta pantalon pantalones"/>
        <img src="../public/ropa/pan5.jpg"  className='object-contain' alt="ropa venta pantalon pantalones"/>
      </Carousel>
    </div>
  )
}
