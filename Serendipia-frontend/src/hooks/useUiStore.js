import { useDispatch, useSelector } from 'react-redux';
import { onItemModalHandler, setSelectedProduct, clearSelectedProduct } from '../store';

export const useUiStore = () => {
  
  const { isCartWidgetEmpty, isActiveEvent, isItemModalOpen } = useSelector( state => state.ui );
  const dispatch = useDispatch();
  
  const handlerProductDetail = ( product ) => {
    dispatch( setSelectedProduct( product ) );
    dispatch( onItemModalHandler() );
  }

  const ClearModal = () => {
    dispatch( clearSelectedProduct() );
    dispatch( onItemModalHandler() );
  }

  const toggleItemModal = () => {
    dispatch( onItemModalHandler() );
  }

  return {
    handlerProductDetail,
    toggleItemModal,
    ClearModal,
    isCartWidgetEmpty,
    isActiveEvent,
    isItemModalOpen
  }
}
