import React from 'react';
import configureStore from 'redux-mock-store';

import { shallow, render, mount } from 'enzyme';
import { Provider } from 'react-redux';

import Header from './Header';
import TopPage from '../TopPage/TopPage';
import LoadingTopPage from '../LoadingTopPage/LoadingTopPage';

import { initialState as gameInfoInitialState } from '../../reducers/gameInfo';
import { initialState as topStatsInitialState } from '../../reducers/topStats';
import { thunkMiddleware } from '../../store';

const middlewares = [thunkMiddleware];
const mockStore = configureStore(middlewares);

describe('Header', () => {
    const initialState = {
        gameInfo: gameInfoInitialState,
        topStats: topStatsInitialState,
    };

    let store;

    beforeAll(() => {
        global.fetch = () => {
            return Promise.resolve({
                json() {
                    return Promise.resolve({ result: [] });
                }
            });
        }
    });

    beforeEach(() => {
        store = mockStore(initialState);
    });

    it('Should match snapshot with data', () => {
        const wrapper = render((
            <Provider store={store}>
                <Header />
            </Provider>
        ));

        expect(wrapper).toMatchSnapshot();
    });

    describe('TopPage', () => {
        it('Should show TopPage if TopStats were loaded', () => {
            const wrapper = shallow(<Header store={store} />);
            const headerWrapper = wrapper.dive();

            headerWrapper.setProps({ isLoading: false });
            headerWrapper.find('button').first().simulate('click');

            expect(headerWrapper.find(TopPage).length).toBe(1);
        });

        it('Shouldn\'t show TopPage if it wasn\'t toggled', () => {
            const wrapper = shallow(<Header store={store} />);

            expect(wrapper.dive().find(TopPage).length).toBe(0);
        });

        it('Should show TopPage if LoadingTopPage weren\'t loaded', () => {
            const wrapper = shallow(<Header store={store} />);
            const headerWrapper = wrapper.dive();

            headerWrapper.setProps({ isLoading: true });

            headerWrapper.find('button').first().simulate('click');

            expect(headerWrapper.find(LoadingTopPage).length).toBe(1);
        });

        it('Shouldn\'t show LoadingTopPage if it wasn\'t toggled', () => {
            const wrapper = shallow(<Header store={store} />);
            const headerWrapper = wrapper.dive();

            headerWrapper.setProps({ isLoading: true });

            expect(headerWrapper.find(LoadingTopPage).length).toBe(0);
        });
    });

    it('Should load topStats after render', () => {
        const spy = jest.spyOn(Header.WrappedComponent.prototype, 'loadTop');
        mount(<Header store={store} />);

        expect(spy).toBeCalled();

        spy.mockReset();
        spy.mockRestore();
    });
});
