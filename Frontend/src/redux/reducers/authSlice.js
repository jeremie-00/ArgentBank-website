import { createSlice } from '@reduxjs/toolkit';

import { fetchLoginToken } from '../actions/fetchAPI';

const initialState = {
    token: null,
    messageErrorAuth: null,
    
    isLoadingAuth: false,
    isLoggedIn: false,
    isErrorAuth: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        setResetToken: () => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchLoginToken.pending, (state) => {
                state.isLoggedIn = false;
                state.isLoadingAuth = true;
            })
            .addCase(fetchLoginToken.rejected, (state, action) => {
                state.isLoggedIn = false;
                state.isLoadingAuth = false;
                state.messageErrorAuth = action.error.message;
                state.isErrorAuth = true;
            })
            .addCase(fetchLoginToken.fulfilled, (state, action) => {
                state.token = action.payload.token;
                state.isLoggedIn = true;
                state.isLoadingAuth = false;
            });

    },
});

export const { setResetToken } = authSlice.actions;

export default authSlice.reducer;
