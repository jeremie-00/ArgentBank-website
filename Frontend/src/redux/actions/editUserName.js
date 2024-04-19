import { createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

// const newName = useSelector((state) => state.user.userName)
// console.log(newName)

export const editUserName = createAsyncThunk(
    "user/editUserName",
    async ({token, newName}) => {
        try {

            const requestBody = {
                userName: newName, 
            };
            const response = await fetch("http://localhost:3001/api/v1/user/profile", {
                method: "PUT",
                headers: {
                    'accept': 'application/json',
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody),
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