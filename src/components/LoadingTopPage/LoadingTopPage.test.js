import React from 'react';

import { shallow } from 'enzyme';

import LoadingTopPage from './LoadingTopPage';

describe('LoadingTopPage', () => {
    it('Should match snapshot', () => {
        expect(shallow(<LoadingTopPage />)).toMatchSnapshot();
    });
});
