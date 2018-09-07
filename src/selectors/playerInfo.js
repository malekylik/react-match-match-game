import { createSelector } from 'reselect';

import { getPlayerInfo as _getPlayerInfo } from '../reducers/playerInfo';

export const getPlayerInfo = createSelector(
    state => state.playerInfo,
    _getPlayerInfo
);
