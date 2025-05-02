import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        items: [],
      },
      reducers: {
        setProducts: ( state, action ) => {
          state.items = action.payload;
        }
      }
});


// Action creators are generated for each case reducer function
export const { setProducts } = productSlice.actions;