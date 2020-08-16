import React from 'react';
import ReactDOM from 'react-dom';

//Modules
import { useHistory } from 'react-router-dom';
//Assets
import './assets/index.css';
import logo from '../../../assets/ante-logo.png';

class Index extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: null,
            username: null,
            company: null,
            password: null
        };

        this.HandleSubmit = this.HandleSubmit.bind(this);
        this.HandleEmailChange = this.HandleEmailChange.bind(this);
        this.HandleUsernameChange = this.HandleUsernameChange.bind(this);
        this.HandleCompanyChange = this.HandleCompanyChange.bind(this);
        this.HandlePasswordChange = this.HandlePasswordChange.bind(this);
    }

    HandleSubmit(event) {
        event.preventDefault();

        var http = new XMLHttpRequest();
        var url = 'http://localhost:6969/leviathan/v1/CreateAccount';
        var params = 'call=' + JSON.stringify(this.state);

        http.open('POST', url, true);
        http.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        http.send(params);

        var user_info = {
            email: this.state.email,
            username: this.state.username,
            company: this.state.company,
            password: this.state.password
        };

        //Get results
        http.onload = function(){
            var data = JSON.parse(this.responseText);
            console.log(data);
            if(data.success) {
                //On success
                var session_info = {
                    account_id: data.account_id,
                    email: user_info.email,
                    username: user_info.username,
                    company: user_info.company,
                    password: user_info.password,
                    token: data.token,
                    secret: data.secret
                };
                
                //Set session information
                window.sessionStorage.setItem('user_info', JSON.stringify(session_info));

                //Redirect to application
                window.location.href = "app";
            } else {
                //On error
                if(data.error == 'email_already_exists') {
                    document.getElementById('email').style.borderColor = "lightcoral";
                }

                if(data.error == 'username_already_exists') {
                    document.getElementById('username').style.borderColor = "lightcoral";
                }
            }
        };
    }

    HandleEmailChange(event) {
        this.setState({ email: event.target.value });
    }

    HandleUsernameChange(event) {
        this.setState({ username: event.target.value });
    }

    HandleCompanyChange(event) {
        this.setState({ company: event.target.value });
        this.state.company = event.target.value;
    }

    HandlePasswordChange(event) {
        this.setState({ password: event.target.value });
    }

    render() {
        return(
            <div className="CreateAccount-overall">
                <div className="CreateAccount-container">
                    <div className="CreateAccount-actualcontainer">
                          <div className="CreateAccount-logocontainer">
                            <img src={logo} className="CreateAccount-logo"></img>
                            <a className="CreateAccount-name">Ante</a>
                          </div>
                          <div className="CreateAccount-nav">
                            <a className="CreateAccount-navbutton" href="../signin">Sign In</a>
                            <a className="CreateAccount-navbutton-selected" href="">Create Account</a>
                          </div>
                          <div className="CreateAccount-formenclosure">
                                <form onSubmit={this.HandleSubmit}>
                                    <input id="email" className="CreateAccount-emailinput" type="email" placeholder="Email address*" onChange={this.HandleEmailChange} required></input>
                                    <input id="username" className="CreateAccount-emailinput" placeholder="Username*" onChange={this.HandleUsernameChange} maxLength={12} required></input>
                                    <input className="CreateAccount-emailinput" placeholder="Company (optional)" onChange={this.HandleCompanyChange}></input>
                                    <input className="CreateAccount-emailinput" type="password" placeholder="Password*" onChange={this.HandlePasswordChange} required></input>
                                    <button className="CreateAccount-submitbutton" onClick={this.HandleSubmit}>Create Account :)</button>
                                </form>
                          </div>
                    </div>
                    <a href="../" className="CreateAccount-forgotpassword">Forgot your password?</a>
                </div>
            </div>
        )
    }
}

export default Index;