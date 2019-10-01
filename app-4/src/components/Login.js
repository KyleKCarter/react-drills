import React, {Component} from "react";

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }
    }

    usernameInput = (name) => {
        this.setState({ username: name})
    }

    passwordInput = (pass) => {
        this.setState({ password: pass})
    }

    logIn = () => {
        alert(`Username: ${this.state.username} Password: ${this.state.password}`);
    }

    render() {
        return(
            <div class="loginComponent">
                 <input className="username" onChange = { e => this.usernameInput(e.target.value)}/>
                 <input className="password" onChange = { e => this.passwordInput(e.target.value)}/> 
                 <button className="login" onClick = {this.logIn}>Login</button>
            </div>
        )
    }
}

export default Login;