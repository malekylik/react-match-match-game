import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import CSSClassList from '../../utils/CSSClassList';

import { getSelectedCards, isCardMatched } from '../../selectors/player';
import {
    addCardToSelectedCards,
    resetSelectedCards,
    addCardsToMatchedCards,
    matchCards,
} from '../../actions/player';

import './Card.css';

class Card extends Component {
    state = {
        className: 'card',
        topSideClassName: 'card-side-top',
        bottomSideClassName: 'card-side-bottom',
    }

    isSelected = false;
    isTurning = false;
    isMatched = this.props.isMatched;

    componentWillUnmount = () => {
        clearTimeout(this.cardTurnTimeout);
        clearTimeout(this.cardDisappearTimeout);
    }

    match = () => {
        this.isMatched = true;

        this.cardDisappearTimeout = setTimeout(() => {
            this.setState({ className: new CSSClassList(this.state.className).add('card-disappear-animation') });
        }, 1250);
    }

    turn = () => {
        this.cardTurnTimeout = setTimeout(() => {
            this.clickHander();
            this.isSelected = false;
        }, 1250);
    }

    select = () => {
        if ((!this.isSelected && !this.isMatched) && this.props.selectedCards.length < 2
            && !this.isTurning) {
            this.clickHander();

            this.isSelected = true;

            this.props.addCardToSelectedCards({
                value: this.props.value,
                match: this.match,
                turn: this.turn,
            });

            if (this.props.selectedCards.length > 0) {
                this.props.matchCards();
            }
        }
    }

    clickHander = () => {
        if (!this.isTurning) {
            this.setState({
                topSideClassName: new CSSClassList(this.state.topSideClassName).add('card-side-top-turn'),
                bottomSideClassName: new CSSClassList(this.state.bottomSideClassName).add('card-side-bottom-turn'),
            });

            this.isTurning = true;
        }
    }

    animationEndHandler = () => {
        if (this.isTurning) {
            let topSideClassList = new CSSClassList(this.state.topSideClassName);
            let bottomSideClassName = new CSSClassList(this.state.bottomSideClassName);

            topSideClassList.toggle('card-side-top-turned');
            bottomSideClassName.toggle('card-side-bottom-turned');

            topSideClassList.remove('card-side-top-turn');
            bottomSideClassName.remove('card-side-bottom-turn');

            this.setState({
                topSideClassName: String(topSideClassList),
                bottomSideClassName: String(bottomSideClassName),
            });

            this.isTurning = false;
        }
    }

    render() {
        const { bottomSideSrc, topSideSrc } = this.props;
        const isShouldCardBeVisible = !(!this.isTurning && !this.cardDisappearTimeout && this.props.isMatched);
        const style = {
            opacity: isShouldCardBeVisible ? 1 : 0,
            cursor: !this.props.isMatched ? 'pointer' : 'default',
        };

        return (
            <figure style={style} className={this.state.className} onClick={this.select} onAnimationEnd={this.animationEndHandler} >
                <img style={{ cursor: this.state.cursor }} className={this.state.bottomSideClassName} src={bottomSideSrc} />
                <img style={{ cursor: this.state.cursor }} className={this.state.topSideClassName} src={topSideSrc} />
            </figure>
        )
    }
}

Card.propTypes = {
    bottomSideSrc: PropTypes.string.isRequired,
    topSideSrc: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
};

export default connect(
    (state, ownProps) => ({
        selectedCards: getSelectedCards(state),
        isMatched: isCardMatched(state, ownProps.value),
    }), {
        addCardToSelectedCards,
        resetSelectedCards,
        addCardsToMatchedCards,
        matchCards,
    })(Card);
