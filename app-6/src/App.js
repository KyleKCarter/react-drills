import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

//components
import Todo from "./components/Todo"

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      userInput: ""
    }
  }
  
  handleInputChange = (val) => {
    this.setState({ userInput: val })
  }

  handleAddTask = () => {
    this.setState({
      list: [...this.state.list, this.state.userInput],
      userInput: ""
    });
  }

  render() {
    let toDoList = this.state.list.map((element, index) => {
      return <Todo key={index} task={element} />
    })
    return (
      <div className="App">
        <h1>My to-do list:</h1>

        <div>
          <input value={this.state.userInput} onChange = { e => this.handleInputChange(e.target.value)} placeholder="New Task"/> 
          <button onClick = {this.handleAddTask}>Add</button>
        </div>

        <br />

        {toDoList}
      </div>

    );
  }
}

export default App;
