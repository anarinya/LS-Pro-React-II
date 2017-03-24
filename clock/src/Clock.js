import React, { Component } from 'react';
import moment from 'moment';

export default class Clock extends Component {
  constructor(props) {
    super(props);

    this.setTime = this.setTime.bind(this);
    this.handleScreenResize = this.handleScreenResize.bind(this);

    this.state = {
      time: new Date(),
      screenWidth: "0"
    };
  }

  handleScreenResize() {
    this.setState(currentState => {
      return {
        screenWidth: window.innerWidth
      };
    });
  }

  setTime() {
    this.setState(currentState => {
      return {
        time: new Date()
      };
    });
  }

  componentDidMount() {
    this.timer = setInterval(() => this.setTime(), 1000);
    this.handleScreenResize();
    window.addEventListener('resize', this.handleScreenResize.bind(this));
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    window.removeEventListener('resize', this.handleScreenResize.bind(this));
  }

  render() {
    //const { time } = this.state;
    const time = moment(this.state.time).format('h:mm:ss');
    const ampm = moment(this.state.time).format('a');
    const clockFont = this.state.screenWidth / 8 + "px";

    return (
      <div className="clock" style={{"fontSize": clockFont}}>
        {time}<span className="ampm">{ampm}</span>
      </div>
    );
  }
}