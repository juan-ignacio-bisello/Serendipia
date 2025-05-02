import { uploadProduct } from '../../helpers/uploadProduct';



export const onCreateProduct = () => {
    const newProduct = {
      name: 'Remera oversize negra',
      description: 'Remera de algodón unisex',
      price: 6500,
      imageUrl: 'https://url-de-la-imagen.jpg',
      stock: 25,
      category: 'indumentaria'
    };
  
    uploadProduct(newProduct);
  };