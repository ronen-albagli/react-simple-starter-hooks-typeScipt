import React from "react";
import "./Timer.scss";
import { connect } from "react-redux";
import { startTimer, timerEnds } from "../../store/actions/timer.action";
import { parseSecondToMin, previewSeconds } from "../../helpers/time.helper";

class Timer extends React.Component<any, any> {
  state = {
    time: -2,
    timer: null,
    timeStart: false,
    timerPause: false
  };

  componentDidMount() {}

  shouldComponentUpdate(nextProps: any, nextState: any) {
    if (nextProps !== this.props) {
      if (
        !this.props.duration &&
        nextProps.duration &&
        this.props.startTimer !== nextProps.startTimer
      ) {
        this.setState(() => ({ time: this.props.duration }));
        this.props.dispatch(startTimer());
      }
      if (nextProps.timerStatus) {
        this.setState(() => ({ timeStart: true }));
        this.startInterval();
      } else {
        this.setState(() => ({ timeStart: false }));
      }
      return true;
    }
    if (this.state !== nextState) {
      return true;
    }

    return false;
  }

  startInterval = () => {
    const interval = setInterval(() => {
      if (this.state.time >= -1) {
        this.setTimer();
        this.setState(() => ({ timeStart: true, time: this.state.time - 1 }));
      }
    }, 1000);

    if (this.state.time === 0) {
      clearInterval(interval);
    }
  };

  setTimer = () => {
    if (this.state.time > -1) {
      const fullTime = previewSeconds(this.state.time);
      this.setState(() => ({ timer: fullTime }));
    } else if (this.state.time === -1) {
      this.props.dispatch(timerEnds());
    }
  };

  render() {
    return <div className="timer">{this.state.timer}</div>;
  }
}

const mapStateToProps = (state: any) => {
  return {
    timerStatus: state.Timer.start
  };
};

export default connect(mapStateToProps)(Timer);
