import { Map, List } from 'immutable';

import {
    ADD_CARD_TO_SELECTED_CARDS,
    RESET_SELECTED_CARDS,
    RESET_MATCHED_CARDS,
    ADD_CARDS_TO_MATCHED_CARDS,
} from '../constants/actions';

export const initialState = Map({
    selectedCards: List([]),
    matchedCards: List([]),
});

const player = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CARD_TO_SELECTED_CARDS:
            return state.set('selectedCards', state.get('selectedCards').push(action.payload));
        case RESET_SELECTED_CARDS:
            return state.set('selectedCards', List([]))
        case RESET_MATCHED_CARDS:
            return state.set('matchedCards', List([]))
        case ADD_CARDS_TO_MATCHED_CARDS:
            return state.set('matchedCards', state.get('matchedCards').push(...action.payload));
        default: return state;
    }
};

export const getSelectedCards = state => state.get('selectedCards').toArray();
export const getMatchedCards = state => state.get('matchedCards').toArray();
export const isCardMatched = (state, value) => {
    return Boolean(~(getMatchedCards(state).findIndex(card => card.value === value)));
};

export default player;
