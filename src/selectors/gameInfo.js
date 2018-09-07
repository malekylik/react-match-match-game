import {
    getFormatedTime as _getFormatedTime,
    timerIsRun as _timerIsRun,
    getGameDif as _getGameDif,
    getCards as _getCards,
    getCardTopSrc as _getCardTopSrc,
    isGameEnded as _isGameEnded,
} from '../reducers/gameInfo';

export const getFormatedTime = state => _getFormatedTime(state.gameInfo);
export const timerIsRun = state => _timerIsRun(state.gameInfo);
export const getGameDif = state => _getGameDif(state.gameInfo);
export const getCardTopSrc = state => _getCardTopSrc(state.gameInfo);
export const getCards = state => _getCards(state.gameInfo);
export const isGameEnded = state => _isGameEnded(state.gameInfo);
