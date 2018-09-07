import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { getPlayerInfo } from '../../selectors/playerInfo';
import { getGameDif, getFormatedTime } from '../../selectors/gameInfo';

import './ResultPage.css';

const ResultPage = ({ firstName, lastName, difficulty, time }) => (
    <section className="result-page">
        <h2 className="result-page__congratulation">
            Congratulation! You are winner!:)
            </h2>
        <h3 className="result-page__heading">
            Game result:
            </h3>
        <article className="result-page__results">
            <span>
                Name:
                </span>
            <span className="result-page__name">
                {firstName}
            </span>
            <span>
                Last Name:
                </span>
            <span className="result-page__last-name">
                {lastName}
            </span>
            <span>
                Difficulty:
                </span>
            <span className="result-page__difficulty">
                {difficulty}
            </span>
            <span>
                Time:
                </span>
            <span className="result-page__time">
                {time}
            </span>
        </article>
    </section>
);

ResultPage.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    difficulty: PropTypes.number.isRequired,
    time: PropTypes.string.isRequired,
};

export default connect((state) => {
    const timeObj = getFormatedTime(state);
    const time = `${timeObj.hours}:${timeObj.minutes}:${timeObj.seconds}`;
    return {
        ...(getPlayerInfo(state)),
        difficulty: getGameDif(state),
        time,
    };
})(ResultPage);
