import React from 'react';

import { shallow } from 'enzyme';

import TextInput from './TextInput';

describe('TextInput', () => {
    it('Should match snapshot', () => {
        expect(shallow(
            <TextInput
                id="test"
                labelText="test"
                name="test"
                placeholder="test"
                onChange={jest.fn()}
                isRequired={true}
                value="test"
                type ="text" />
        )).toMatchSnapshot();
    });
});
