import { useSelector } from 'react-redux';


export const useUiStore = () => {
  
  const { isCartWidgetEmpty, isActiveEvent } = useSelector( state => state.ui );
  
  return {
    isCartWidgetEmpty,
    isActiveEvent,
  }
}
