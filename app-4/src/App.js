import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

//components
import Login from "./components/Login"

class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  
  render() {
    return (
      <div className="App">
        <h2>Sign In</h2>
        <Login />
      </div>
    );
  }
}

export default App;
