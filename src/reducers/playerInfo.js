import { Map } from 'immutable';

import { CHANGE_USER_INFO } from '../constants/actions';

export const initialState = Map({
    playerFirstName: '',
    playerLastName: '',
    playerEmail: '',
});

const playerInfo = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_USER_INFO:
            return state.merge(action.payload);
        default: return state;
    }
};

export const getPlayerInfo = state => ({
    firstName: state.get('playerFirstName'),
    lastName: state.get('playerLastName'),
    email: state.get('playerEmail'),
});

export default playerInfo;
