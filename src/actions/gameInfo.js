import {
    CHANGE_GAME_INFO,
    INCREMENT_TIME,
    START_TIMER,
    STOP_TIMER,
    SET_GAME_ENDED,
    SET_CARDS,
} from '../constants/actions';

export const changeGameInfo = (gameDif, cardTopSrc, time) => {
    const payload = {};

    if (gameDif !== undefined) {
        payload.gameDif = gameDif;
    }

    if (cardTopSrc !== undefined) {
        payload.cardTopSrc = cardTopSrc;
    }

    if (time !== undefined) {
        payload.time = time;
    }

    return {
        type: CHANGE_GAME_INFO,
        payload
    };
};

export const incrementTime = () => ({
    type: INCREMENT_TIME,
});

export const startTimer = () => ({
    type: START_TIMER,
});

export const stopTimer = () => ({
    type: STOP_TIMER,
});

export const setCards = (cards) => ({
    type: SET_CARDS,
    payload: cards,
});

export const setGameEnded = (isEnded) => ({
    type: SET_GAME_ENDED,
    payload: isEnded,
})
