import React from 'react';

import { shallow } from 'enzyme';

import TopPageRow from './TopPageRow';

describe('TopPageRow', () => {
    it('Should match snapshot', () => {
        const wrapper = shallow(<TopPageRow number={1} email="test@test.test" name="test" score={10} />);
        expect(wrapper).toMatchSnapshot();
    });
});
