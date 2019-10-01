import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      cookies: ['chocolate', 'chocolate chip', 'white chocolate chip', 'white chocolate macadamia nut', 'peanut butter', 'snickerdoodle', 'oatmeal rasin', 'sugar', 'frosted', 'chocolate chunk'],
      userInput: ''
    }
  }

  handleChange = (val) => {
    this.setState({ userInput: val});
  }
  
  render() {
    let cookiesToDisplay = this.state.cookies.filter((element, index) => {return element.includes(this.state.userInput);}).map((element, index) => {return <h2 key={index}>{element}</h2>})
    return (
      <div className="App">
        <input className="inputField" onChange={ e => this.handleChange(e.target.value)}/>
        {cookiesToDisplay}
      </div>
    );
  }
}

export default App;
