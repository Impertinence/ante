import React from 'react';
import ReactDOM from 'react-dom';

//Assets
import './assets/index.css';
import noresultsimage from '../../../assets/no-results.png';
import rocketillustration from '../../../assets/rocketillustration.png';

//ExternalComponents
import NoPage from '../../MiscComponents/NoPage/index.js';

//ApplicationComponents
import ApplicationHeader from '../ApplicationHeader/index.js';

//3rd party packages


//No results component
function NoResults() {
    return(
        <div>
            <img className="ApplicationHome-noresults" src={noresultsimage}></img>
            <br></br>
            <a className="ApplicationHome-noresultsheader">Couldn't deduce any results :(</a>
        </div>
    )
}

//Create new project
function NewProjectIllustration() {
    return(
        <div className="ApplicationHome-newprojectcontainer">
            <img className="ApplicationHome-rocketillustration" src={rocketillustration} />
            <br></br>
            <br></br>
            <div className="ApplicationHome-rockettextcontainer">
                <a className="ApplicationHome-rockettextheader">Looks like you have no recents. Let's fix that!</a>
                <br></br>
                <div className="ApplicationHome-rocketbuttoncontainer">
                    <a href="projects/new" className="ApplicationHome-createbutton">Create Project</a>
                    <a href="manager/databases/new" className="ApplicationHome-createbutton" style={{marginLeft: '1vw'}}>Create Database</a>
                    <a href="manager/api/new" className="ApplicationHome-createbutton" style={{marginLeft: '1vw'}}>Create API</a>
                </div>
            </div>
        </div>
    )
}


//Application Home
class ApplicationHome extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="ApplicationHome-main">
                <ApplicationHeader current_page={'Home'} />
                <div className="ApplicationHome-contentcontainer">
                    <div className="ApplicationHome-homecontainer">
                        <a className="ApplicationHome-getstartedheader">Get Started</a>
                        <br></br>
                        <br></br>
                        <br></br>
                        <div className="ApplicationHome-buttoncontainer">
                            <button className="ApplicationHome-linkbutton">
                                <i className="fas fa-link"></i>
                            </button>
                            <button className="ApplicationHome-shopbutton">
                                <i className="fas fa-store"></i>
                            </button>
                            <button className="ApplicationHome-portfoliobutton">
                                <i className="fas fa-palette"></i>
                            </button>
                        </div>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <a className="ApplicationHome-getstartedheader">What's Going On?</a>
                        <div className="ApplicationHome-updatescontainer">
                            <div>
                                <i className="fas fa-search" style={{fontSize: '3vh', color: 'lightgray'}}></i>
                                <input className="ApplicationHome-search" placeholder="Search..."></input>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

//Index
class Index extends React.Component {
    constructor(props) {
        super(props)

        //Session info
        this.user_info = window.sessionStorage.getItem('user_info');
        this.current_page = window.sessionStorage.getItem('current_page');
    }

    componentDidMount() {
        //Check if user is signed in
        if(this.user_info) {
            //Render app home
            ReactDOM.render(<ApplicationHome />, document.getElementById('root'));
        } else {
            // ReactDOM.render(<NoPage />, document.getElementById('root'));
        }
    }

    render() {
        return(
            <div className="ApplicationHome-main">

            </div>
        )
    }
}

export default Index;