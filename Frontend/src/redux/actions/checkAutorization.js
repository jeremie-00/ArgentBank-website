import { createAsyncThunk } from "@reduxjs/toolkit";

export const checkAuthorization = createAsyncThunk(
    "user/checkAuthorization",
    async (loginData) => {
        try {
            const response = await fetch("http://localhost:3001/api/v1/user/login", {
                method: "POST",
                headers: {
                    'accept': 'application/json',
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(loginData),
            })

            if (response.ok) {
                return await response.json()
            } else {
                throw new Error("Erreur lors de la vérification de l'autorisation")
            }
        } catch (error) {
            throw new Error("Erreur lors de la vérification de l'autorisation")
        }
    }
)
