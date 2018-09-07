import React from 'react';

import { shallow } from 'enzyme';

import SkirtSelector from './SkirtSelector';

describe('SkirtSelector', () => {
    it('Should match snapshot', () => {
        expect(shallow(
            <SkirtSelector
                key="skirt-1"
                id="skirt1"
                imageSrc="test"
                width="45"
                height="70"
                alt="skirt1"
                onClick={jest.fn()}
                defaultChecked={true} />)).toMatchSnapshot();
    });
});
