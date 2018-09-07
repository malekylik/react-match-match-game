import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import playerInfo from './playerInfo';
import player from './player';
import gameInfo from './gameInfo';
import topStats from './topStats';

export default combineReducers({
    playerInfo,
    gameInfo,
    player,
    topStats,
    routing: routerReducer,
});
