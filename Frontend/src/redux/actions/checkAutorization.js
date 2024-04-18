import { createAsyncThunk } from "@reduxjs/toolkit";

// Fonction asynchrone qui vérifie l'autorisation de l'utilisateur dans la base de données
export const checkAuthorization = createAsyncThunk(
    "user/checkAuthorization",
    async (loginData) => {
        try {
            // Utilise fetch pour effectuer une requête à ton serveur ou à ta base de données MongoDB
            const response = await fetch("http://localhost:3001/api/v1/user/login", {
                method: "POST",
                headers: {
                    'accept': 'application/json',
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(loginData),
            });

            // Vérifie si la réponse est OK (status 200)
            if (response.ok) {
                // Renvoie les données reçues si la requête est réussie
                return await response.json();
            } else {
                // Gère les erreurs en renvoyant une erreur ou un message approprié
                throw new Error("Erreur lors de la vérification de l'autorisation");
            }
        } catch (error) {
            // Gère les erreurs en renvoyant une erreur ou un message approprié
            throw new Error("Erreur lors de la vérification de l'autorisation");
        }
    }
);
