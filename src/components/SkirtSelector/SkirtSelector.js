import React from 'react';
import PropTypes from 'prop-types';

const SkirtSelector = ({ id, imageSrc: src, width, height, alt, onClick, defaultChecked = false }) => (
    <p>
        <label htmlFor={id}>
            <img width={width} height={height} src={src} alt={alt} />
        </label>
        <input id={id} type="radio" name="skirt" onClick={onClick} defaultChecked={defaultChecked} />
    </p>
);

SkirtSelector.propTypes = {
    id: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    defaultChecked: PropTypes.bool,
};

export default SkirtSelector;
