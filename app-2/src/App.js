import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      mottos: ['RUN CMC', 'my name is', 'today is taco tuesday']
    }
  }
  
  render() {
  let mottosToDisplay = this.state.mottos.map((element, index) => {return <h2 key={index}>{element}</h2>});
    return (
      <div className="App">{mottosToDisplay}</div>
    );
  }
}

export default App;
