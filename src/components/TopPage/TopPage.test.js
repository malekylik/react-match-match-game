import React from 'react';
import configureStore from 'redux-mock-store';

import { shallow } from 'enzyme';

import TopPage from './TopPage';
import TopPageRow from '../TopPageRow/TopPageRow';

import { initialState as topStatsInitialState } from '../../reducers/topStats';

const middlewares = [];
const mockStore = configureStore(middlewares);

describe('TopPage', () => {
    it('Should match snapshot with data', () => {
        const initialState = {
            topStats: topStatsInitialState,
        };

        const store = mockStore(initialState);

        const topPageRowsData = [
            {
                email: 'test1@test1.test',
                name: 'name1',
                score: 1,
            },
            {
                email: 'test2@test2.test',
                name: 'name2',
                score: 2,
            },
        ];

        const wrapper = shallow((<TopPage store={store} />));

        const topStatsAsTopPageRows = topPageRowsData.map((rows, i) => (<TopPageRow key={i + 1} number={i + 1} {...rows} />));
        wrapper.setProps({ topStatsAsTopPageRows });

        expect(wrapper).toMatchSnapshot();
    });
});
