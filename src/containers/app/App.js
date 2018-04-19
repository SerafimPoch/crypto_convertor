import React, { Component } from "react";
import Chart from "../chart/Chart";
import { Container } from "./index";

class App extends Component {
  state = {
    value: "hello"
  };

  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }
  render() {
    return (
      <Container>
        <Chart />
      </Container>
    );
  }
}

export default App;
