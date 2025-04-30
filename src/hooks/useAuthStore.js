import { useDispatch, useSelector } from 'react-redux'

export const useAuthStore = () => {

  const { status } = useSelector( state => state.auth );
  const dispatch = useDispatch();


  return { 
    // Propiedades
    status 
  }
}
