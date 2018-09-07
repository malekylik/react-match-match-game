import { CHANGE_USER_INFO } from '../constants/actions';

export const changeUserInfo = (playerFirstName, playerLastName, playerEmail) => {
    const payload = {};

    if (playerFirstName !== undefined) {
        payload.playerFirstName = playerFirstName;
    }

    if (playerLastName !== undefined) {
        payload.playerLastName = playerLastName;
    }

    if (playerEmail !== undefined) {
        payload.playerEmail = playerEmail;
    }

    return {
        type: CHANGE_USER_INFO,
        payload
    };
};
