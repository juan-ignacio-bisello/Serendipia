import { useEffect } from 'react';
import { useProductStore } from '../../hooks/useProductStore';
import { useDispatch } from 'react-redux';
import { increment } from '../../store';

export const Carousel = () => {
  const { clothes, startLoadingProducts } = useProductStore();
  const dispatch = useDispatch();

  const onAddToCart = () => {
      dispatch( increment() );
    };

  useEffect(() => {
    startLoadingProducts();
  }, []);

  if (!Array.isArray(clothes)) {
    return <div>Error: los productos no son válidos</div>;
  }

  if (clothes.length === 0) {
    return <div className="text-center py-6">Cargando productos...</div>;
  }

  return (
    <div className="overflow-x-auto whitespace-nowrap space-x-4 flex px-4 py-6">
      {clothes.map((product, index) => (
        <div
          key={product._id || index}
          className="inline-block w-64 bg-white rounded-xl shadow-lg p-4 flex-shrink-0"
        >
          <img
            src={product.image || `https://via.placeholder.com/250x150?text=Producto+${index + 1}`}
            alt={product.name || `Producto ${index + 1}`}
            className="rounded-md mb-4"
          />
          <h3 className="text-lg font-semibold">{product.name || `Producto ${index + 1}`}</h3>
          <p className="text-gray-600">${product.price || `9${index}`} USD</p>
          <button 
            className="mt-2 w-full bg-lime-500 text-white py-2 rounded-md hover:bg-lime-600"
            onClick={ onAddToCart }  
          >
            Agregar al carrito
          </button>
        </div>
      ))}
    </div>
  );
};
