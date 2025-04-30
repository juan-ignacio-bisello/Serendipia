import { useDispatch } from "react-redux";
import { increment } from "../store/ui/uiSlice";


export const ListItem = ({ image, title, price }) => {

  const dispatch = useDispatch();

  const onAddToCart = () => {
    dispatch( increment() ); // 
  };

  return (
    <div className="w-full max-w-xs bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition duration-300">
      <img
        src={ image }
        alt={ title }
        className="w-full h-48 object-cover"
      />
      <div className="p-4 flex flex-col justify-between h-44">
        <h2 className="text-lg font-semibold text-gray-500 line-clamp-2">
          { title }
        </h2>
        <div className="flex justify-between items-center mt-4">
          <span className="text-xl font-bold text-gray-500">${ price }</span>
          {/* <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#bfbfbf"><path d="m384-334 96-74 96 74-36-122 90-64H518l-38-124-38 124H330l90 64-36 122ZM233-120l93-304L80-600h304l96-320 96 320h304L634-424l93 304-247-188-247 188Zm247-369Z"/></svg> */}
          <button
            onClick={ onAddToCart }
            className="px-4 py-2 text-sm"
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
}
