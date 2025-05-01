import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'not-authenticated',
        uid: null,
        email: null,
        displayName: null,
        photoURL: null,
        errorMessage: null,
    },
    reducers: {
        onChecking: ( state ) => {
            state.status = 'checking';
            state.errorMessage = null;
        },
        onLogin: ( state, { payload } ) => {
            state.status = 'authenticated';
            state.uid = payload.uid;
            state.email = payload.email;
            state.displayName = payload.displayName;
            state.photoURL = payload.photoURL;
            state.errorMessage = null;
        },
        onLogout: ( state ) => {
            state.status = 'not-authenticated';
            state.uid = null;
            state.email = null;
            state.displayName = null;
            state.photoURL = null;
            state.errorMessage = null;
        },
        clearErrorMessage: ( state ) => {
            state.errorMessage = null;
        }
    }
});


// Action creators are generated for each case reducer function
export const { onLogin, onLogout, onChecking, clearErrorMessage } = authSlice.actions;
