import { List, Map } from 'immutable';

import {
    SET_TOP_STATS,
    SET_TOP_STATS_LOADING,
} from '../constants/actions';

export const initialState = Map({
    topStats: List(),
    isLoading: false,
});

const topStats = (state = initialState, action) => {
    switch (action.type) {
        case SET_TOP_STATS:
            return state.set('topStats', List(action.payload));
        case SET_TOP_STATS_LOADING:
            return state.set('isLoading', action.payload);
        default: return state;
    }
};

export const getTopStats = state => state.get('topStats');
export const getIsTopStatsLoading = state => state.get('isLoading');

export default topStats;
