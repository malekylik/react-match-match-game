import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { getTopStatsAsTopPageRows } from '../../selectors/topStats';

import './TopPage.css';

const TopPage = ({ topStatsAsTopPageRows }) => {
    return (
        <div className="top">
            <table className="top__table">
                <tbody>
                    <tr>
                        <th className="top__th">
                            №
                    </th>
                        <th className="top__th">
                            email
                    </th>
                        <th className="top__th">
                            Name
                    </th>
                        <th className="top__th">
                            Score
                    </th>
                    </tr>
                    {topStatsAsTopPageRows}
                </tbody>
            </table>
        </div>
    );
}

TopPage.propTypes = {
    topStatsAsTopPageRows: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element)
    ]),
};

export default connect((state) => ({
    topStatsAsTopPageRows: getTopStatsAsTopPageRows(state),
}))(TopPage); 
