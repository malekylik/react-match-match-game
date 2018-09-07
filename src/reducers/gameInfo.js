import { Map } from 'immutable';

import {
    CHANGE_GAME_INFO,
    INCREMENT_TIME,
    START_TIMER,
    STOP_TIMER,
    SET_CARDS,
    SET_GAME_ENDED,
} from '../constants/actions';
import { DIF, CARDS_TOP } from '../constants';

export const initialState = Map({
    gameDif: DIF.LOW.number,
    cardTopSrc: CARDS_TOP[0],
    time: 0,
    runTimer: false,
    isGameEnded: false,
    cards: [],
});

const gameInfo = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_GAME_INFO:
            return state.merge(action.payload);
        case INCREMENT_TIME:
            return state.set('time', state.get('time') + 1);
        case START_TIMER:
            return state.set('runTimer', true);
        case STOP_TIMER:
            return state.set('runTimer', false);
        case SET_CARDS:
            return state.set('cards', [...(action.payload)]);
        case SET_GAME_ENDED:
            return state.set('isGameEnded', action.payload);
        default: return state;
    }
};

export const getFormatedTime = (state) => {
    const time = state.get('time');

    let seconds = time % 60;
    let minutes = Math.floor(time / 60);
    let hours = Math.floor(time / 3600);

    if (seconds < 10) {
        seconds = `0${seconds}`;
    }

    if (minutes < 10) {
        minutes = `0${minutes}`;
    }

    if (hours < 10) {
        hours = `0${hours}`;
    }

    return {
        hours: String(hours),
        minutes: String(minutes),
        seconds: String(seconds),
    };
};

export const timerIsRun = state => state.get('runTimer');
export const getGameDif = state => state.get('gameDif');
export const getCardTopSrc = state => state.get('cardTopSrc');
export const getCards = state => state.get('cards');
export const isGameEnded = state => state.get('isGameEnded');

export default gameInfo;
