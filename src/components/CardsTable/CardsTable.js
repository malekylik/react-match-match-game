import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { startTimer, stopTimer } from '../../actions/gameInfo';
import { resetSelectedCards } from '../../actions/player';
import { getCards, isGameEnded } from '../../selectors/gameInfo';
import { getMatchedCards } from '../../selectors/player';

import './CardsTable.css';

class CardsTable extends Component {
    componentWillUnmount() {
        this.props.stopTimer();
        this.props.resetSelectedCards();
    }

    componentDidMount() {
        if (!this.props.isGameEnded) {
            this.props.startTimer();
        }
    }

    render() {
        const { cards } = this.props;

        return (
            <section className="cards-table">
                {cards}
            </section>
        );
    }
}

CardsTable.propTypes = {
    cards: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element)
    ]),
};

export default connect((state) => ({
    cards: getCards(state),
    matchedCards: getMatchedCards(state),
    isGameEnded: isGameEnded(state),
}), {
        startTimer,
        stopTimer,
        resetSelectedCards,
    })(CardsTable);
