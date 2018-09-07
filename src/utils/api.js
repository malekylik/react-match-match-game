import { API_URL } from '../constants/api';

export const saveToDatabase = (username, email, score) => {
    return fetch(API_URL, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            email: email,
            score: score,
        }),
    });
}

export const getFromDatabase = async () => {
    return (await (await fetch(API_URL)).json());
};
