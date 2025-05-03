import { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore/lite';
import { FirebaseBD } from '../../DB/firebaseConfig';
import { uploadImage } from '../../helpers';
import { useNavigate } from 'react-router-dom';

export const ProductForm = () => {

  const navigate = useNavigate();

    const [formValues, setFormValues] = useState({
        name: '',
        description: '',
        price: '',
        imageUrl: '',
        stock: '',
        category: ''
      });

    const [imageFile, setImageFile] = useState( null );

    const handleChange = ({ target }) => {
      if (target.type === 'file') {
        setImageFile(target.files[0]);
      } else {
        setFormValues({
          ...formValues,
          [target.name]: target.value,
        });
      }
    };
    

    const handleSubmit = async (event) => {
      event.preventDefault();
    
      try {
        let imageUrl = formValues.imageUrl;
    
        if (imageFile) {
          imageUrl = await uploadImage(imageFile);
        }
    
        const productData = {
          ...formValues,
          price: Number(formValues.price),
          stock: Number(formValues.stock),
          imageUrl,
        };
    
        await addDoc(collection(FirebaseBD, `products/${productData.category}`), productData);
    
        alert('Producto subido con éxito');
    
        setFormValues({
          name: '',
          description: '',
          price: '',
          stock: '',
          category: '',
          imageUrl: '',
        });
        setImageFile(null);
      } catch (error) {
        console.error('Error al subir el producto', error);
        alert('Error al subir el producto');
      }
    };

    const isFormValid = () => {
      return (
        formValues.name &&
        formValues.description &&
        formValues.price &&
        formValues.stock &&
        formValues.category &&
        (imageFile || formValues.imageUrl)
      );
    };

    const handleHome = () => {
      navigate('/');
    };

  return (
    <>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-xl shadow-Pink mt-10 space-y-4">
        <h2 className="text-2xl font-semibold mb-4 text-White">Nuevo Producto</h2>

        <input
          type="text"
          name="name"
          placeholder="Nombre"
          className="w-full border p-2 rounded text-Gray"
          value={formValues.name}
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          placeholder="Descripción"
          className="w-full border p-2 rounded text-Gray"
          value={formValues.description}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="price"
          placeholder="Precio"
          className="w-full border p-2 rounded text-Gray"
          value={formValues.price}
          onChange={handleChange}
          required
        />

        <div className='flex justify-around gap-4'>
          <input
          type="file"
          name="imageFile"
          placeholder="URL de la imagen"
          className="w-1/2 border p-2 rounded text-Gray"
          onChange={handleChange}
        />

        <input
          type="url"
          name="imageUrl"
          placeholder="URL de la imagen"
          className="w-1/2 border p-2 rounded text-Gray"
          value={formValues.imageUrl}
          onChange={handleChange}
        />
        </div>
        

        <input
          type="number"
          name="stock"
          placeholder="Stock"
          className="w-full border p-2 rounded text-Gray"
          value={formValues.stock}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="category"
          placeholder="Categoría"
          className="w-full border p-2 rounded text-Gray"
          value={formValues.category}
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          className="w-full py-2 rounded"
          disabled={ !isFormValid() }
        >
          Subir Producto
        </button>
      </form>

      <div className="max-w-xl mx-auto bg-white p-6 rounded-xl mt-10 space-y-4">
        <button 
          className="flex px-4 py-2 w-full justify-center text-sm bg-Black text-Gray shadow shadow-Pink hover:shadow-lg hover:shadow-Pink"
          onClick={ handleHome }>
          Home
        </button>
      </div>
    </>
    
  )
}
