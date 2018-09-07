import React from 'react';
import PropTypes from 'prop-types';

import './RuleList.css';

const RuleList = ({ children }) => (
    <ol className="rule-list">
        {children}
    </ol>
);

RuleList.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element)
    ]),
};

export default RuleList;
