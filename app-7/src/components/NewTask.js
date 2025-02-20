import React, {Component} from "react";

class NewTask extends Component {
    constructor() {
        super();
        this.state = {
            input: ""
        }
    }

    handleInputChange = (val) => {
        this.setState({ input: val })
    }

    handleAddTask = () => {
        this.props.add(this.state.input);
        this.setState({ input: "" });
    }

    render() {
        return(
            <div>
                <input 
                value={this.state.input}
                placeholder="Enter New Task"
                onChange={ e => this.handleInputChange(e.target.value)}
                />
                <button onClick= {this.handleAddTask}>Add</button>
            </div>
        )
    }
}

export default NewTask;