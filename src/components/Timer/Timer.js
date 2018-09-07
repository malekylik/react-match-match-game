import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Timer.css';

class Timer extends Component {
    timerId = null;

    start() {
        if (this.timerId === null) {
            this.timerId = setInterval(this.props.onTimeChange, 1000);
        }
    }

    terminate() {
        if (this.timerId !== null) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    componentDidMount() {
        this.componentDidUpdate();
    }

    componentDidUpdate() {
        if (this.props.run) {
            this.start();
        } else {
            this.terminate();
        }
    }

    render() {
        const { time: { hours, minutes, seconds } } = this.props;

        return (
            <div className='timer'>
                {`${hours}:${minutes}:${seconds}`}
            </div>
        );
    }
}

Timer.defaultProps = {
    time: {
        hours: '00',
        minutes: '00',
        seconds: '00',
    }
};

Timer.propTypes = {
    time: PropTypes.shape({
        hours: PropTypes.string.isRequired,
        minutes: PropTypes.string.isRequired,
        seconds: PropTypes.string.isRequired,
    }).isRequired,
    run: PropTypes.bool.isRequired,
    onTimeChange: PropTypes.func,
};

export default Timer;
