import React from 'react';
import configureStore from 'redux-mock-store';

import { shallow } from 'enzyme';

import ResultPage from './ResultPage';

import { initialState as playerInfoInitialState } from '../../reducers/playerInfo';
import { initialState as gameInfoInitialState } from '../../reducers/gameInfo';

const middlewares = [];
const mockStore = configureStore(middlewares);

describe('ResultPage', () => {
    it('Should match snapshot', () => {
        const initialState = {
            playerInfo: playerInfoInitialState,
            gameInfo: gameInfoInitialState,
        };

        const store = mockStore(initialState);
        const wrapper = shallow(<ResultPage store={store} />);

        expect(wrapper).toMatchSnapshot();
    });
});
