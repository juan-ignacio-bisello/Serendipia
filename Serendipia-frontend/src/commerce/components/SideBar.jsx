import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useUiStore } from '../../hooks';

export const SideBar = () => {
  const navigate = useNavigate();

  const { toggleSideBar, isSideBarOpen } = useUiStore();

  const handleHome = () => {
    navigate('/');
    startLoadingProducts();
  };

  const handlerFilter = ( category ) => {
    handleHome();
    startLoadingProductsByCategory( category );
  }

  const handleRegister = () => {
    navigate('/auth/register');
  };

  return (
    <AnimatePresence>
      {isSideBarOpen && (
        <>
            {/* Fondo oscuro */}
            <motion.div
                className="fixed inset-0 bg-Black bg-opacity-40 z-40 md:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            />

            {/* Sidebar */}
            <motion.div
                className="fixed top-0 left-0 w-64 h-full bg-Black text-white z-50 p-4 shadow-lg shadow-White md:hidden"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', stiffness: 100 }}
            >
                {/* Botón de cerrar */}
                <button onClick={toggleSideBar} className="text-white text-3xl">
                  <span className="material-symbols-outlined  h-9 w-9">menu_open</span>
                </button>

                {/* Agregá tus ítems de navegación acá */}
                <nav className="mt-6 space-y-4">
                  <button className='block w-full h-9' onClick={ handleHome } >Home</button>
                  <button className='block w-full h-9' onClick={ () => handlerFilter('Pantalones')}>Pantalones</button>
                  <button className='block w-full h-9' onClick={ () => handlerFilter('Remeras')}>Remeras</button>
                  <button className='block w-full h-9' onClick={ () => handlerFilter('Buzos')} >Buzos</button>
                </nav>
            </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
