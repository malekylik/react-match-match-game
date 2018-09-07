import {
    SET_TOP_STATS,
    SET_TOP_STATS_LOADING,
} from '../constants/actions';
import { convertGetData } from '../utils';
import { getFromDatabase } from '../utils/api';

export const setTopStats = (topStats) => ({
    type: SET_TOP_STATS,
    payload: topStats,
});

export const setTopStatsLoading = (isLoading) => ({
    type: SET_TOP_STATS_LOADING,
    payload: isLoading,
});

export const loadTop = () => {
    return async (dispatch) => {
        dispatch(setTopStatsLoading(true));
        const top = (await getFromDatabase()).result.sort((l, r) => (r.score - l.score));

        dispatch(setTopStats(convertGetData(top)));
        dispatch(setTopStatsLoading(false));
    };
};
