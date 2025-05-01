import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        cod: 0,
        status: 'out-stock', // in-stock
        name: '',
        href: '',
        imageSrc: '',
        imageAlt: '',
        price: '',
        color: '',
        counter: 0
    },
    reducers: {
        incrementProd: ( state, payload ) => {
            state.counter = counter + payload;
        },
        decrementProd: ( state, { payload } ) => {
            state.counter = counter - payload;
        },
        setProduct: ( state, { payload } ) => {
            state.cod = payload.cod;
            state.status = payload.status;
            state.name = payload.name;
            state.href = payload.href;
            state.imageSrc = payload.imageSrc;
            state.imageAlt = payload.imageAlt;
            state.price = payload.price;
            state.color = payload.color;
            state.counter = payload.counter;
        }
    }
});


// Action creators are generated for each case reducer function
export const { incrementProd, decrementProd, setProduct } = productSlice.actions;