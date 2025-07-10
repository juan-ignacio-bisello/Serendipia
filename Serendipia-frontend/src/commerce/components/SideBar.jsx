import { useUiStore } from '../../hooks';
import { motion, AnimatePresence } from 'framer-motion';


export const SideBar = () => {

    const { toggleSideBar, isSideBarOpen } = useUiStore();

  return (
    <AnimatePresence>
      {isSideBarOpen && (
        <>
            {/* Fondo oscuro */}
            <motion.div
                className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
                onClick={toggleSideBar}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            />

            {/* Sidebar */}
            <motion.div
                className="fixed top-0 left-0 w-64 h-full bg-gray-900 text-white z-50 p-4 shadow-lg md:hidden"
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ type: 'spring', stiffness: 200 }}
            >
                {/* Botón de cerrar */}
                <button onClick={toggleSideBar} className="text-white text-3xl">
                  <span className="material-symbols-outlined">menu_open</span>
                </button>

                {/* Agregá tus ítems de navegación acá */}
                <nav className="mt-6 space-y-4">
                  <a href="/" className="block hover:text-gray-400">Home</a>
                  <a href="/categorias" className="block hover:text-gray-400">Categorías</a>
                  <a href="/admin" className="block hover:text-gray-400">Admin</a>
                </nav>
            </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
