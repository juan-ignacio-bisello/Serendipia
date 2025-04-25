import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        isCartWidgetEmpty: true,
        isActiveEvent: false,
    },
    reducers: {
        increment: (state, /* action */ ) => {
            state.counter += 1;
            if ( state.counter >= 1 ) {
                state.isCartWidgetEmpty = false;
            }
        },
        decrement: (state, /* action */ ) => {
            state.counter -= 1;
            if ( state.counter === 0 ) {
                state.isCartWidgetEmpty = true;
            }
        },
    }
});


// Action creators are generated for each case reducer function
export const { increment, decrement } = uiSlice.actions;