import React from 'react';

import { shallow } from 'enzyme';

import Timer from './Timer';

describe('Timer', () => {
    const initialTime = {
        hours: String('00'),
        minutes: String('00'),
        seconds: String(10),
    };

    it('Should match snapshot', () => {
        expect(shallow(<Timer run={false} time={initialTime} />)).toMatchSnapshot();
    });

    describe('Timer.start()', () => {
        it("Should run timer", () => {
            const spy = jest.spyOn(Timer.prototype, 'start');
            const wrapper = shallow(<Timer run={true} time={initialTime} />);
            const timerId = wrapper.instance().timerId;
            
            expect(spy).toBeCalled();
            expect(timerId).not.toBeNull();

            spy.mockReset();
            spy.mockRestore();
        });

        it("Shouldn't run timer again if it is already running", () => {
            const wrapper = shallow(<Timer run={true} time={initialTime} />);
            const timerId = wrapper.instance().timerId;

            wrapper.setProps({ run: true });

            expect(wrapper.instance().timerId).toBe(timerId);
        });

        it("Should stop timer", () => {
            const spy = jest.spyOn(Timer.prototype, 'terminate');
            const wrapper = shallow(<Timer run={true} time={initialTime} />);

            wrapper.setProps({ run: false });
            
            expect(spy).toBeCalled();
            expect(wrapper.instance().timerId).toBeNull();

            spy.mockReset();
            spy.mockRestore();
        });
    });
});
