import React from 'react';
import ReactDOM from 'react-dom';

//Assets
import '../assets/ApplicationHeader-usermenu.css';

class SubComponent extends React.Component {
    constructor(props) {
        super(props)

        //Component functions
        this.ButtonClick = this.ButtonClick.bind(this);
    }

    //On button click
    ButtonClick(event) {
        var button_type = event.target.value;

        //If Sign Out
        if(button_type == 'signout') {
            //Destroy session info
            window.sessionStorage.removeItem('user_info');

            //Redirect to home page
            window.location.href = '../';
        }

        //If Account
        if(button_type == 'account') {

        }
    }

    render() {
        return(
            <div className="UserMenu-container">
                <button onClick={this.ButtonClick} value='account' className="UserMenu-button"><i className="fas fa-user"></i> Account</button>
                <button onClick={this.ButtonClick} value='settings' className="UserMenu-button"><i className="fas fa-cog"></i> Settings</button>
                <button onClick={this.ButtonClick} value='upgrade' className="UserMenu-button"><i className="fas fa-star"></i> Upgrade</button>
                <button onClick={this.ButtonClick} value='signout' className="UserMenu-button"><i className="fas fa-sign-out-alt"></i> Log Out :(</button>
            </div>
        )
    }
}

export default SubComponent;