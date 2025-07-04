import { Outlet, useNavigate } from 'react-router-dom';
import { ProductList } from '../components/ProductList';

export const AdminPanelPage = () => {
  const navigate = useNavigate();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Panel de Administración</h1>

      <div className="flex gap-4 mb-6">
        <button className="btn flex w-24 h-8 items-center justify-center" onClick={() => navigate('add')} >Agregar</button>
      </div>
      
      <h2 className="text-xl font-bold mb-4" >Filtros: </h2>
      <div className="flex gap-4 mb-6">
        <button className="btn flex w-24 h-8 items-center justify-center" >Buzos</button>
        <button className="btn flex w-24 h-8 items-center justify-center" >Remeras</button>
        <button className="btn flex w-24 h-8 items-center justify-center" >Pantalones</button>
      </div>
        
      

      <div>
        <ProductList />
      </div>
      
      <Outlet />
    </div>
  );
};
