import { push } from 'react-router-redux';

import { stopTimer, setGameEnded } from './gameInfo';
import {
    ADD_CARD_TO_SELECTED_CARDS,
    RESET_SELECTED_CARDS,
    RESET_MATCHED_CARDS,
    ADD_CARDS_TO_MATCHED_CARDS,
} from '../constants/actions';
import {
    getSelectedCards,
    getMatchedCards,
} from '../selectors/player';
import { getPlayerInfo } from '../selectors/playerInfo';
import { 
    getGameDif,
} from '../selectors/gameInfo';
import { loadTop, setTopStatsLoading } from './topStats';
import { saveToDatabase } from '../utils/api';

export const addCardToSelectedCards = (card) => ({
    type: ADD_CARD_TO_SELECTED_CARDS,
    payload: card,
});

export const resetSelectedCards = () => ({
    type: RESET_SELECTED_CARDS,
});

export const resetMatcherCards = () => ({
    type: RESET_MATCHED_CARDS,
});

export const addCardsToMatchedCards = (cards) => ({
    type: ADD_CARDS_TO_MATCHED_CARDS,
    payload: cards,
});

export const matchCards = () => {
    return (dispatch, getState) => {
        const state = getState();
        const [firstCard, secondCard] = getSelectedCards(state);
        const matchedCardsCount = getMatchedCards(state).length;
        const difficulty = getGameDif(state);

        const isMatch = firstCard.value === secondCard.value;

        if (isMatch) {
            firstCard.match();
            secondCard.match();
            dispatch(addCardsToMatchedCards([firstCard, secondCard]));

            if (difficulty === (matchedCardsCount + 2)) {
                dispatch(endGame());
            }
        } else {
            firstCard.turn();
            secondCard.turn();
        }

        dispatch(resetSelectedCards());
    };
};

export const endGame = () => {
    return (dispatch, getState) => {
        dispatch(stopTimer());

        const state = getState();
        const playerInfo = getPlayerInfo(state);
        const difficulty = getGameDif(state);

        dispatch(push('/result'));

        dispatch(setGameEnded(true));
        dispatch(saveResult(`${playerInfo.firstName} ${playerInfo.lastName}`, playerInfo.email, difficulty));
    }
};

export const saveResult = (name, email, score) => {
    return async (dispatch) => {
        dispatch(setTopStatsLoading(true));

        await saveToDatabase(name, email, score);
        await dispatch(loadTop());

        dispatch(setTopStatsLoading(false));
    };
};
