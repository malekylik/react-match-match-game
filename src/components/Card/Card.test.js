import React from 'react';
import configureStore from 'redux-mock-store';

import { mount } from 'enzyme';

import Card from './Card';

import { initialState as playerInitialState } from '../../reducers/player';
import { CARDS_TOP, CARDS_BOTTOM } from '../../constants';

const middlewares = [];
const mockStore = configureStore(middlewares);

describe('CardsTable', () => {
    const initialState = {
        player: playerInitialState,

    };

    const store = mockStore(initialState);

    it('Should match', () => {
        const wrapper = mount(
            <Card store={store} value={0} bottomSideSrc={CARDS_BOTTOM[0]} topSideSrc={CARDS_TOP[0]} />
        );

        expect(wrapper).toMatchSnapshot();
    });
});
