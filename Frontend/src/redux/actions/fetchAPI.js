
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchLoginToken = createAsyncThunk(
    'user/login',
    async ({ email, password }) => {
        try {
            const response = await fetch('http://localhost:3001/api/v1/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            })

            const data = await response.json()
            const { token } = data.body
            return token

        } catch (error) {
            throw new Error("Erreur lors de l'authentification");
        }
    }
);

export const fetchUserProfile = createAsyncThunk(
    'user/profile',
    async (_, thunkAPI) => {
        const { token } = thunkAPI.getState().user;
        try {
            const response = await fetch('http://localhost:3001/api/v1/user/profile', {
                method: 'POST',
                headers: {
                    'accept': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            });

            const profileData = await response.json()
            const { userName, firstName, lastName } = profileData.body
            return { userName, firstName, lastName }
        } catch (error) {
            throw new Error("Erreur lors de la récupération des données du profile");
        }
    }
);

export const fetchUpdateUserName = createAsyncThunk(
    'user/userName',
    async (_, thunkAPI) => {
        const { token, userName } = thunkAPI.getState().user;
        const requestBody = {
            userName: userName,
        }
        try {
            const response = await fetch('http://localhost:3001/api/v1/user/profile', {
                method: 'PUT',
                headers: {
                    'accept': 'application/json',
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody),
            })

            const profileData = await response.json()
            const { userName } = profileData.body
            return userName
        } catch (error) {
            throw new Error("Erreur lors de l'envoi des données userName")
        }
    }
)