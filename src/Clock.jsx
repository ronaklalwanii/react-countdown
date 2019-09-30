import React, { Component } from "react";
import "./App.css";

class Clock extends Component {
  state = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  };
  componentDidMount() {
    this.getTimeUntil(this.props.deadline);
    setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
  }
  leading0(num) {
    if (num < 10) {
      return "0" + num;
    }
    return num;
  }
  getTimeUntil = () => {
    const time = Date.parse(this.props.deadline) - Date.parse(new Date());
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((time / 1000 / 60) % 60);
    const seconds = Math.floor((time / 1000) % 60);
    this.setState({ days, hours, minutes, seconds });
  };
  render() {
    return (
      <div>
        <div className="clock-days">{this.leading0(this.state.days)} days</div>
        <div className="clock-hours">
          {this.leading0(this.state.hours)} hours
        </div>
        <div className="clock-minutes">
          {this.leading0(this.state.minutes)} minutes
        </div>
        <div className="clock-minutes">
          {this.leading0(this.state.seconds)} seconds
        </div>
      </div>
    );
  }
}
export default Clock;
