import React from 'react';

import { shallow } from 'enzyme';

import Rule from './Rule';

describe('Rule', () => {
    it('Should match snapshot', () => {
        expect(shallow(
            <Rule>test</Rule>
        )).toMatchSnapshot();
    });
});
