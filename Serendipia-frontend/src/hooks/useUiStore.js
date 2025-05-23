import { useSelector } from 'react-redux';


export const useUiStore = () => {
  
  const { isCartWidgetEmpty, isActiveEvent, isItemModalOpen } = useSelector( state => state.ui );
  
  return {
    isCartWidgetEmpty,
    isActiveEvent,
    isItemModalOpen
  }
}
