import { createSelector } from 'reselect';

import {
    getSelectedCards as _getSelectedCards,
    getMatchedCards as _getMatchedCards,
    isCardMatched as _isCardMatched,
} from '../reducers/player';

export const getSelectedCards = state => _getSelectedCards(state.player);
export const getMatchedCards = state => _getMatchedCards(state.player);
export const isCardMatched = createSelector((state, value) => ({ state: state.player, value }),
({ state, value }) => _isCardMatched(state, value));
