import React from 'react';
import configureStore from 'redux-mock-store';

import { shallow, render } from 'enzyme';
import { push } from 'react-router-redux';

import StartPage from './StartPage';

import { initialState as gameInfoInitialState } from '../../reducers/gameInfo';
import { initialState as playerInfoInitialState } from '../../reducers/playerInfo';
import { changeUserInfo } from '../../actions/playerInfo';
import { changeGameInfo, setCards, setGameEnded } from '../../actions/gameInfo';
import { resetMatcherCards } from '../../actions/player';
import { DIF, CARDS_TOP } from '../../constants';

const middlewares = [];
const mockStore = configureStore(middlewares);

describe('StartPage', () => {
    const initialState = {
        gameInfo: gameInfoInitialState,
        playerInfo: playerInfoInitialState,
    };

    let store;

    beforeEach(() => {
        store = mockStore(initialState);
    });

    it('Should match snapshot', () => {
        const wrapper = render(<StartPage store={store} />);

        expect(wrapper).toMatchSnapshot();
    });

    it('Should change state of player info', () => {
        const wrapper = shallow(<StartPage store={store} />).dive();
        const instance = wrapper.instance();

        instance.changeTextInputHandler({
            target: {
                id: 'first-name',
                value: 'first-name-test',
            }
        });

        instance.changeTextInputHandler({
            target: {
                id: 'last-name',
                value: 'last-name-test',
            }
        });

        instance.changeTextInputHandler({
            target: {
                id: 'email',
                value: 'email-test',
            }
        });

        const state = wrapper.state();

        expect(state.playerFirstName).toBe('first-name-test');
        expect(state.playerLastName).toBe('last-name-test');
        expect(state.playerEmail).toBe('email-test');
    });

    it('Should change state of difficulty', () => {
        const wrapper = shallow(<StartPage store={store} />).dive();
        const instance = wrapper.instance();

        instance.changeDifInputHandler({ target: { id: DIF.HIGH.text } });

        const state = wrapper.state();

        expect(state.dif).toBe(DIF.HIGH.number);
    });

    it('Should change state of skirt source', () => {
        const wrapper = shallow(<StartPage store={store} />).dive();
        const instance = wrapper.instance();

        const skirtIndex = CARDS_TOP.length - 1;
        const skirtSrc = CARDS_TOP[skirtIndex];

        instance.changeSkirtHandler({ target: { id: String(skirtIndex) } });

        const state = wrapper.state();

        expect(state.cardTopSrc).toBe(skirtSrc);
    });

    describe('On submit', () => {
        const e = {
            preventDefault() {

            }
        }; 

        it('Should send changeUserInfo action', () => {
            const wrapper = shallow(<StartPage store={store} />).dive();
            const instance = wrapper.instance();
    
            instance.changeTextInputHandler({
                target: {
                    id: 'first-name',
                    value: 'first-name-test',
                }
            });
    
            instance.changeTextInputHandler({
                target: {
                    id: 'last-name',
                    value: 'last-name-test',
                }
            });
    
            instance.changeTextInputHandler({
                target: {
                    id: 'email',
                    value: 'email-test',
                }
            });

            instance.onSubmitHandler(e);

            const expectedAction = changeUserInfo('first-name-test', 'last-name-test', 'email-test');
            const actions = store.getActions();
            const changeUserInfoAction = actions.find(action => action.type === expectedAction.type);

            expect(changeUserInfoAction).toBeDefined();
            expect(changeUserInfoAction).toEqual(expectedAction);
        });

        it('Should send changeGameInfo action', () => {
            const wrapper = shallow(<StartPage store={store} />).dive();
            const instance = wrapper.instance();

            instance.changeDifInputHandler({ target: { id: DIF.HIGH.text } });

            const skirtIndex = CARDS_TOP.length - 1;
            const skirtSrc = CARDS_TOP[skirtIndex];
    
            instance.changeSkirtHandler({ target: { id: String(skirtIndex) } });
    
            instance.onSubmitHandler(e);

            const expectedAction = changeGameInfo(DIF.HIGH.number, skirtSrc, 0);
            const actions = store.getActions();
            const changeGameInfoAction = actions.find(action => action.type === expectedAction.type);

            expect(changeGameInfoAction).toBeDefined();
            expect(changeGameInfoAction).toEqual(expectedAction);
        });

        it('Should send resetMatcherCards action', () => {
            const wrapper = shallow(<StartPage store={store} />).dive();
            const instance = wrapper.instance();
    
            instance.onSubmitHandler(e);

            const expectedAction = resetMatcherCards();
            const actions = store.getActions();

            expect(~(actions.findIndex(action => action.type === expectedAction.type))).toBeTruthy();
        });

        it('Should send setCards action', () => {
            const wrapper = shallow(<StartPage store={store} />).dive();
            const instance = wrapper.instance();
    
            instance.onSubmitHandler(e);

            const expectedAction = setCards([]);
            const actions = store.getActions();
            
            expect(~(actions.findIndex(action => action.type === expectedAction.type))).toBeTruthy();
        });

        it('Should send setGameEnded action with false argument', () => {
            const wrapper = shallow(<StartPage store={store} />).dive();
            const instance = wrapper.instance();
    
            instance.onSubmitHandler(e);

            const expectedAction = setGameEnded(false);
            const actions = store.getActions();
            const setGameEndedAction = actions.find(action => action.type === expectedAction.type);

            expect(setGameEndedAction).toBeDefined();
            expect(setGameEndedAction).toEqual(expectedAction);
        });

        it('Should send push action with /game argument', () => {
            const wrapper = shallow(<StartPage store={store} />).dive();
            const instance = wrapper.instance();
    
            instance.onSubmitHandler(e);

            const expectedAction = push('/game');
            const actions = store.getActions();
            const pushAction = actions.find(action => action.type === expectedAction.type);

            expect(pushAction).toBeDefined();
            expect(pushAction).toEqual(expectedAction);
        });
    });
});
