import React from 'react';
import PropTypes from 'prop-types';

import './TopPageRow.css';

const TopPageRow = ({ number, email, name, score }) => (
    <tr>
        <td className="top__td">
            {number}
        </td>
        <td className="top__td">
            {email}
        </td>
        <td className="top__td">
            {name}
        </td>
        <td className="top__td">
            {score}
        </td>
    </tr>
);

TopPageRow.propTypes = {
    number: PropTypes.number.isRequired, 
    email: PropTypes.string, 
    name: PropTypes.string, 
    score: PropTypes.number, 
};

export default TopPageRow; 
