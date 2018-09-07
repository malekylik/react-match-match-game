import React, { Component } from 'react';

import { connect } from 'react-redux';

import Timer from '../Timer/Timer';
import TopPage from '../TopPage/TopPage';
import LoadingTopPage from '../LoadingTopPage/LoadingTopPage';

import { loadTop } from '../../actions/topStats';
import { incrementTime } from '../../actions/gameInfo';
import { getFormatedTime, timerIsRun } from '../../selectors/gameInfo';
import { getIsTopStatsLoading } from '../../selectors/topStats';

import './Header.css';

class Header extends Component {
    state = {
        isShowedTopPage: false,
    }

    toggleTopPage = () => {
        this.setState((prevState) => ({ isShowedTopPage: !prevState.isShowedTopPage }));
    }

    componentDidMount() {
        if (!this.props.isLoading) {
            this.loadTop();
        }
    }

    async loadTop() {
        this.props.loadTop();
    }

    render() {
        const { time, timerRun, onTimeChange } = this.props;

        const CurrentTopPage = this.props.isLoading ? LoadingTopPage : TopPage;

        return (
            <header className='header'>
                <button className='header__top-button' onClick={this.toggleTopPage}>TOP</button>
                <Timer time={time} run={timerRun} onTimeChange={onTimeChange} />
                {this.state.isShowedTopPage && <CurrentTopPage />}
            </header>
        );
    }
}


export default connect(
    state => ({
        time: getFormatedTime(state),
        timerRun: timerIsRun(state),
        isLoading: getIsTopStatsLoading(state),
    }),
    {
        onTimeChange: incrementTime,
        loadTop,
    })(Header);
