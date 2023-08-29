// authService.ts

import axios from 'axios';

/**
 * Request a magic link for authentication.
 *
 * @param email - The email address of the user.
 * @returns The response data from the server.
 * @throws Will throw an error if the request fails.
 */
export const requestMagicLink = async (email: string) => {
    try {
        const response = await axios.post('http://localhost:8080/auth/requestLoginLink', {
            email: email
        });
        return response.data;
    } catch (error) {
        console.error("Erreur lors de la demande du lien magique", error);
        throw error;
    }
}

// Vous pouvez ajouter d'autres fonctions liées à l'authentification ici si nécessaire.
