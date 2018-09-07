import React from 'react';
import configureStore from 'redux-mock-store';

import { Provider } from 'react-redux';
import { render, mount } from 'enzyme';

import CardsTable from './CardsTable';
import Card from '../Card/Card';

import { START_TIMER } from '../../constants/actions';

import { initialState as playerInitialState } from '../../reducers/player';
import { initialState as gameInfoInitialState } from '../../reducers/gameInfo';
import { CARDS_TOP, CARDS_BOTTOM } from '../../constants';
import { stopTimer } from '../../actions/gameInfo';
import { resetSelectedCards } from '../../actions/player';

const middlewares = [];
const mockStore = configureStore(middlewares);

describe('CardsTable', () => {
    const initialState = {
        player: playerInitialState,
        gameInfo: gameInfoInitialState.set('cards', [<Card key={0} value={0} bottomSideSrc={CARDS_BOTTOM[0]} topSideSrc={CARDS_TOP[0]} />]),
    };

    let store;

    beforeEach(() => {
        store = mockStore(initialState);
    });

    it('Should match snapshot with data', () => {
        const wrapper = render(
            <Provider store={store}>
                <CardsTable />
            </Provider>
        );

        expect(wrapper).toMatchSnapshot();
    });

    describe('Start timer', () => {
        it('Should start time when it is mounted', () => {
            mount(
                <Provider store={store}>
                    <CardsTable />
                </Provider>
            );

            const actions = store.getActions();
            const expectedPayload = { type: START_TIMER }

            expect(actions).toEqual([expectedPayload]);
        });

        it('Shouldn\'t start time if game is ended', () => {
            initialState.gameInfo = initialState.gameInfo.set('isGameEnded', true);
            store = mockStore(initialState);

            mount(
                <Provider store={store}>
                    <CardsTable />
                </Provider>
            );

            const actions = store.getActions();
            expect(actions).toEqual([]);
        });
    });

    it('Should stop time and reset selected cards when it is unmounted', () => {
        const wrapper = mount(
            <Provider store={store}>
                <CardsTable />
            </Provider>
        );

        wrapper.unmount();

        const actions = store.getActions();
        const stopTimerAction = stopTimer();
        const resetSelectedCardsAction = resetSelectedCards();

        expect(~(actions.findIndex(action => action.type === stopTimerAction.type))).toBeTruthy();
        expect(~(actions.findIndex(action => action.type === resetSelectedCardsAction.type))).toBeTruthy();
    });
});
