import React from 'react';

import { render } from 'enzyme';

import Rule from '../Rule/Rule';
import RuleList from './RuleList';

describe('RuleList', () => {
    it('Should match snapshot', () => {
        const RULES = [
            'test1',
            'test2',
        ];

        expect(render(
            <RuleList>
                {RULES.map((ruleText, i) => (
                    <Rule key={i}>{ruleText}</Rule>
                ))}
            </RuleList>
        )).toMatchSnapshot();
    });
});
