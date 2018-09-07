import React from 'react';

import { shallow } from 'enzyme';

import Spinner from './Spinner';

describe('Spinner', () => {
    it('Should match snapshot', () => {
        expect(shallow(<Spinner />)).toMatchSnapshot();
    }); 
});
