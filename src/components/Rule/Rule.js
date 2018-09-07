import React from 'react';
import PropTypes from 'prop-types';

const Rule = ({ children: ruleDescription }) => (
    <li>{ruleDescription}</li>
);

Rule.propTypes = {
    children: PropTypes.string.isRequired,
};

export default Rule;
