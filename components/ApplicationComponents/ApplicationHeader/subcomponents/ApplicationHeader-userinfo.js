import React from 'react';
import ReactDOM from 'react-dom';

//assets
import profilepicture from '../../../../assets/profile-picture.png';

//SubComponents
import UserMenu from './ApplicationHeader-usermenu.js';

class SubComponent extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            menu_status: 0
        };

        //Props
        this.user_info = this.props.user_info;

        //Component functions
        this.UserMenu = this.DisplayUserMenu.bind(this);
    }

    //Display the user menu
    DisplayUserMenu() {
        if(this.state.menu_status == 0) {
            this.setState({
                menu_status: 1
            });

            ReactDOM.render(<UserMenu />, document.getElementById('ApplicationHeader.settingscontainer'));
        }

        if(this.state.menu_status == 1) {
            this.setState({
                menu_status: 0
            });

            ReactDOM.unmountComponentAtNode(document.getElementById('ApplicationHeader.settingscontainer'));
        }
    }

    render() {
        return(
            <button id="ApplicationHeader.accountcontainer" onClick={this.UserMenu} className="ApplicationHeader-accountcontainer">
                <img className="ApplicationHeader-accountimage" src={profilepicture}></img>
                <div className="ApplicationHeader-accountinfocontainer">
                    <a className="ApplicationHeader-accountinfousername">{this.user_info.username}</a>
                    <a className="ApplicationHeader-accountinfousername"><i id="ApplicationHeader.accountinfocaret" className="fas fa-caret-down"></i></a>
                </div>
                <div id="ApplicationHeader.settingscontainer">
                    
                </div>
            </button>
        )
    }
}

export default SubComponent;