import React, { Component } from 'react';

import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import RuleList from '../RuleList/RuleList';
import Rule from '../Rule/Rule';
import TextInput from '../TextInput/TextInput';
import DifficultySelector from '../DifficultySelector/DifficultySelector';
import SkirtSelector from '../SkirtSelector/SkirtSelector';
import Card from '../Card/Card';

import { DIF, RULES, CARDS_TOP, CARDS_BOTTOM } from '../../constants';
import {
    changeGameInfo,
    startTimer,
    setCards,
    setGameEnded,
} from '../../actions/gameInfo';
import { changeUserInfo } from '../../actions/playerInfo';
import { resetMatcherCards } from '../../actions/player';
import { getPlayerInfo } from '../../selectors/playerInfo';
import { getGameDif, getCardTopSrc } from '../../selectors/gameInfo';
import { createRandomSequence } from '../../utils';

import './StartPage.css';

export class StartPage extends Component {
    state = {
        playerFirstName: this.props.playerInfo.firstName,
        playerLastName: this.props.playerInfo.lastName,
        playerEmail: this.props.playerInfo.email,
        dif: this.props.gameDif,
        cardTopSrc: this.props.cardTopSrc,
    }

    changeTextInputHandler = ({ target: { id, value } }) => {
        if (~id.search(/first-name/i)) {
            this.setState({ playerFirstName: value });
        } else if (~id.search(/last-name/i)) {
            this.setState({ playerLastName: value });
        } else if (~id.search(/email/i)) {
            this.setState({ playerEmail: value });
        }
    }

    changeDifInputHandler = ({ target: { id } }) => {
        let dif = null;

        Object.keys(DIF).forEach((key) => {
            const textDif = DIF[key].text;

            if (textDif === id) {
                dif = DIF[key].number;
            }
        });

        if (dif !== null) {
            this.setState({ dif: dif });
        } else {
            this.setState({ dif: null });
        }
    }

    changeSkirtHandler = ({ target: { id } }) => {
        const skirtIndex = id.match(/\d+/)[0];

        if (skirtIndex) {
            this.setState({ cardTopSrc: CARDS_TOP[skirtIndex] });
        } else {
            this.setState({ cardTopSrc: null });
        }
    }

    createSkirtSelections(defaultChecked = 0) {
        return CARDS_TOP.map((skirtSrc, i) => {
            let checked = false;

            if (i === defaultChecked) {
                checked = true;
            }

            return (
                <SkirtSelector
                    key={`skirt-${i}`}
                    id={`skirt${i}`}
                    imageSrc={skirtSrc}
                    width="45"
                    height="70"
                    alt={`skirt${i}`}
                    onClick={this.changeSkirtHandler}
                    defaultChecked={checked} />);
        });
    }

    createDifficultySelections(defaultChecked = 0) {
        return Object.keys(DIF).map((key, i) => {
            let checked = false;

            if (i === defaultChecked) {
                checked = true;
            }

            const text = DIF[key].text;
            return (
                <DifficultySelector
                    key={text}
                    id={text}
                    labelText={text}
                    onClick={this.changeDifInputHandler}
                    defaultChecked={checked} />
            );
        });
    }

    onSubmitHandler = (e) => {
        e.preventDefault();

        const { playerFirstName, playerLastName, playerEmail } = this.state;
        this.props.changeUserInfo(playerFirstName, playerLastName, playerEmail);

        const { dif, cardTopSrc } = this.state;
        this.props.changeGameInfo(dif, cardTopSrc, 0);
        this.props.resetMatcherCards();
        this.props.setCards(this.createCards(CARDS_BOTTOM, cardTopSrc, dif));
        this.props.setGameEnded(false);
        this.props.push('/game');
    }

    createCards = (bottomSkirt, topSkirts, count) => {
        const randomSequence = createRandomSequence(0, count);

        return randomSequence.map((_value, i) => {
            const value = Math.floor(_value / 2);
            return (<Card key={i} value={value} bottomSideSrc={bottomSkirt[value]} topSideSrc={topSkirts} />);
        });
    };

    render() {
        const skirtSelections = this.createSkirtSelections(CARDS_TOP.findIndex(cardTopSrc => cardTopSrc === this.state.cardTopSrc));
        const difficultySelections = this.createDifficultySelections(Object.keys(DIF).findIndex(key => DIF[key].number === this.state.dif));

        return (
            <section className="start-page">
                <h1 className="welcome">Hello! This is match-match-game!</h1>
                <h2>How to play:</h2>
                <p className="start-page__how-to">
                    Memory is a counter game where the object is to find pairs.
                            <br />
                    <br />
                    When the game begins, all pictures are hidden.
                        </p>
                <h2>To Play:</h2>
                <RuleList>
                    {RULES.map((ruleText, i) => (
                        <Rule key={i}>{ruleText}</Rule>
                    ))}
                </RuleList>
                <form onSubmit={this.onSubmitHandler} className="start-page__form">
                    <div>
                        <TextInput key="first-name" id="first-name-input" labelText="First Name" name="first-name" placeholder="first name" onChange={this.changeTextInputHandler} value={this.state.playerFirstName} isRequired={true} />
                        <TextInput key="last-name" id="last-name-input" labelText="Last Name" name="last-name" placeholder="last name" onChange={this.changeTextInputHandler} value={this.state.playerLastName} isRequired={true} />
                        <TextInput key="email" id="email-input" labelText="Email" name="email" placeholder="email" isRequired={true} type="email" onChange={this.changeTextInputHandler} value={this.state.playerEmail} />
                    </div>
                    <div className="start-page__game-options-fieldset">
                        <div className="start-difficulty-inputs">
                            <span>Game difficulty</span>
                            {difficultySelections}
                        </div>
                        <div>
                            <span>Skirt Cards</span>
                            <div className="start-page__skirt-inputs">
                                {skirtSelections}
                            </div>
                        </div>
                    </div>
                    <input className="start-page__submit" type="submit" />
                </form>
            </section>
        );
    }
}

export default connect((state) => ({
    playerInfo: getPlayerInfo(state),
    gameDif: getGameDif(state),
    cardTopSrc: getCardTopSrc(state),
}), {
        changeUserInfo,
        changeGameInfo,
        startTimer,
        setCards,
        setGameEnded,
        resetMatcherCards,
        push,
    })(StartPage);
