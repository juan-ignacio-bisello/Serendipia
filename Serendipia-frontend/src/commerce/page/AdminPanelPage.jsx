import { Outlet, useNavigate } from 'react-router-dom';
import { ProductList } from '../components/ProductList';

export const AdminPanelPage = () => {
  const navigate = useNavigate();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Panel de Administración</h1>

      <div className="flex gap-4 mb-6">
        <button onClick={() => navigate('add')} className="btn">Agregar</button>
        <button onClick={() => navigate('list')} className="btn">Listar</button>
        <button onClick={() => navigate('edit/:id')} className="btn">Actualizar</button>
      </div>

      <div>
        <ProductList />
      </div>
      
      <Outlet />
    </div>
  );
};
