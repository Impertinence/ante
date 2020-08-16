import React from 'react';
import ReactDOM from 'react-dom';

//assets
import './assets/index.css';

//SubComponents
import MainMenu from './subcomponents/ApplicationHeader-mainmenu.js';
import UserInfo from './subcomponents/ApplicationHeader-userinfo.js';

class Index extends React.Component {
    constructor(props) {
        super(props);

        //Props
        this.current_page = this.props.current_page;

        //Session info
        this.user_info = JSON.parse(window.sessionStorage.getItem('user_info'));

        //Component functions
        
    }

    render() {
        return(
            <div className="ApplicationHeader-barcontainer">
                <div className="ApplicationHeader-barinner">
                    <div id="ApplicationHeader.accountinfocontainer">
                        <UserInfo user_info={this.user_info} />
                    </div>
                    <div id="ApplicationHeader.mainmenu">
                        <MainMenu current_page={this.current_page} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Index;