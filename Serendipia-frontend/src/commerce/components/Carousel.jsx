import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startLoadingProducts } from '../../store';



const products = [
    {
      id: 0,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
      id: 1,
      name: 'Earthen Bottle',
      href: '#',
      price: '$48',
      imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-01.jpg',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
      
      color: 'Black',
    },
    {
      id: 2,
      name: 'Nomad Tumbler',
      href: '#',
      price: '$35',
      imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-02.jpg',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
      color: 'Black',
    },
    {
      id: 3,
      name: 'Focus Paper Refill',
      href: '#',
      price: '$89',
      imageSrc: 'public/ropa/pan5.jpg',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
      color: 'Black',
    },
    {
      id: 4,
      name: 'Machined Mechanical Pencil',
      href: '#',
      price: '$35',
      imageSrc: 'public/ropa/pan2.jpg',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      color: 'Black',
    },
    {
      id: 5,
      name: 'Machined Mechanical Pencil',
      href: '#',
      price: '$35',
      imageSrc: 'public/ropa/pan1.jpg',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      color: 'Black',
    },
    {
      id: 6,
      name: 'Machined Mechanical Pencil',
      href: '#',
      price: '$35',
      imageSrc: 'public/ropa/pan3.jpg',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      color: 'Black',
    },
    {
      id: 7,
      name: 'Machined Mechanical Pencil',
      href: '#',
      price: '$35',
      imageSrc: 'public/ropa/pan4.jpg',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      color: 'Black',
    },
    // More products...
  ]


export const Carousel = () => {

  const dispatch = useDispatch();
  const products = useSelector( state => state.product.items );

  useEffect(() => {
    dispatch( startLoadingProducts() );
  
  }, [])
  
    return (
        <div className="overflow-x-auto whitespace-nowrap space-x-4 flex px-4 py-6">
          { products.map((_, index) => (
            <div
              key={index}
              className="inline-block w-64 bg-white rounded-xl shadow-lg p-4 flex-shrink-0"
            >
              <img
                src={`https://via.placeholder.com/250x150?text=Producto+${index + 1}`}
                alt={`Producto ${index + 1}`}
                className="rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold">Producto {index + 1}</h3>
              <p className="text-gray-600">$9{index} USD</p>
              <button className="mt-2 w-full bg-lime-500 text-white py-2 rounded-md hover:bg-lime-600">
                Agregar al carrito
              </button>
            </div>
          ))}
        </div>
      )
}
