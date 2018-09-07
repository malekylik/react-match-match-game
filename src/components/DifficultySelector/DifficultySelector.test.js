import React from 'react';

import { shallow } from 'enzyme';

import DifficultySelector from './DifficultySelector';

describe('DifficultySelector', () => {
    it('Should match snapshot', () => {
        expect(shallow(
            <DifficultySelector
                id="test1"
                labelText="test1"
                onClick={jest.fn()}
                defaultChecked={true} />)).toMatchSnapshot();
    });
});
