import { createAsyncThunk } from "@reduxjs/toolkit";


export const userProfiles = createAsyncThunk(
    "user/profile",
    async ({token}) => {
        try {

            const response = await fetch("http://localhost:3001/api/v1/user/profile", {
                method: "POST",
                headers: {
                    'accept': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            })

            if (response.ok) {
                return await response.json();
            } else {
                throw new Error("Erreur lors de la vérification de l'autorisation");
            }
        } catch (error) {
            throw new Error("Erreur lors de la vérification de l'autorisation");
        }
    }
);
