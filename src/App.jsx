import React, { Component } from "react";
import Clock from "./Clock.jsx";
import "./App.css";

class App extends Component {
  state = {
    deadline: "April 29, 2025",
    newDeadLine: ""
  };
  changeDeadline = () => {
    this.setState({
      deadline: this.state.newDeadLine
    });
  };
  render() {
    return (
      <div className="App">
        <div className="App-title">CountDown To {this.state.deadline}</div>
        <Clock deadline={this.state.deadline} />
        <div>
          <input
            className="text-field"
            type="text"
            onChange={event =>
              this.setState({ newDeadLine: event.target.value })
            }
            placeholder="Enter New Date"
          />
          <button
            className="submit-btn"
            type="submit"
            onClick={() => this.changeDeadline()}
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default App;
