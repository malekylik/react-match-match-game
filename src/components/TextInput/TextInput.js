import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({ id, labelText, name, placeholder, onChange,  isRequired = false, value = '', type = 'text' }) => (
    <p>
        <label htmlFor={id}>{labelText}</label>
        <br />
        <input id={id} type={type} name={name} placeholder={placeholder} onChange={onChange} value={value} required={isRequired} />
    </p>
);

TextInput.propTypes = {
    id: PropTypes.string.isRequired,
    labelText: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    isRequired: PropTypes.bool,
    type: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
};

export default TextInput;
