import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        isItemModalOpen: false,
        isCartWidgetEmpty: true,
        isActiveEvent: false,
        counter: 0
    },
    reducers: {
        onItemModalOpen: ( state ) => {
            state.isItemModalOpen = true;
        },
        onItemModalClose: ( state ) => {
            state.isItemModalOpen = false;
        },
        increment: ( state ) => {
            state.counter += 1;
            if ( state.counter >= 1 ) {
                state.isCartWidgetEmpty = false;
            }
        },
        decrement: ( state ) => {
            if ( state.counter === 0 ) {
                state.isCartWidgetEmpty = true;
                return;
            }
            state.counter -= 1;
            
        },
        reset: ( state ) => {
            state.counter = 0;
            state.isCartWidgetEmpty = true;
            state.isActiveEvent = false;
        }
    }
});


// Action creators are generated for each case reducer function
export const { onItemModalOpen, onItemModalClose, increment, decrement, reset } = uiSlice.actions;