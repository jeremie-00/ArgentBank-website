import { createSlice } from '@reduxjs/toolkit';

import { fetchLoginToken } from '../actions/fetchAPI';

const initialState = () =>  ({
    token: localStorage.getItem("token"),
    messageErrorAuth: null,
    
    isLoadingAuth: false,
    isLoggedIn: localStorage.getItem("token") !== null,
    isErrorAuth: false,
})

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState(),
    reducers: {
        setResetToken: () => initialState(),
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchLoginToken.pending, (state) => {
                state.isLoadingAuth = true;
            })
            .addCase(fetchLoginToken.rejected, (state, action) => {
                state.isLoadingAuth = false;
                state.messageErrorAuth = action.error.message;
                state.isErrorAuth = true;
            })
            .addCase(fetchLoginToken.fulfilled, (state, action) => {
                state.isLoadingAuth = false;
                state.token = action.payload.token;
                state.isLoggedIn = true;
                if (action.payload.rememberMe) {
                    localStorage.setItem("token", action.payload.token)
                }
            });

    },
});

export const { setResetToken } = authSlice.actions;

export default authSlice.reducer;
