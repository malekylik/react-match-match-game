import React from 'react';

import { createSelector } from 'reselect';

import TopPageRow from '../components/TopPageRow/TopPageRow';

import {
    getTopStats as _getTopStats,
    getIsTopStatsLoading as _getIsTopStatsLoading,
} from '../reducers/topStats';

export const getTopStats = state => _getTopStats(state.topStats);
export const getTopStatsAsTopPageRows = createSelector(getTopStats,
    topStats => topStats.map((rows, i) => (<TopPageRow key={i + 1} number={i + 1} {...rows} />)).toArray());
export const getIsTopStatsLoading = state => _getIsTopStatsLoading(state.topStats);
