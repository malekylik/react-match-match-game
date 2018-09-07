import React from 'react';
import PropTypes from 'prop-types';

import './DifficultySelector.css';

const DifficultySelector = ({ id, labelText, onClick, defaultChecked = false }) => (
    <p className="start-difficulty-input">
        <label htmlFor={id}>{labelText}</label>
        <input id={id} type="radio" name="difficulty" onClick={onClick} defaultChecked={defaultChecked} />
    </p>
);

DifficultySelector.propTypes = {
    id: PropTypes.string.isRequired,
    labelText: PropTypes.string.isRequired,
    defaultChecked: PropTypes.bool,
    onClick: PropTypes.func
};

export default DifficultySelector;
