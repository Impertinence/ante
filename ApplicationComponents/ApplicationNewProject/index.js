import React from 'react';
import ReactDOM from 'react-dom';

//Assets
import './assets/index.css';

//ApplicationComponents
import ApplicationHeader from '../ApplicationHeader/index';

//SubComponents
import NewShop from './subcomponents/ApplicationNewProject-newshop';


class ProjectTypes extends React.Component {
    constructor(props) {
        super(props)

        //Component funcs
        this.NewShopProject = this.NewShopProject.bind(this);
        this.NewPortfolioProject = this.NewPortfolioProject.bind(this);
        this.NewLinkProject = this.NewLinkProject.bind(this);
        this.NewWebAppProject = this.NewWebAppProject.bind(this);
        this.NewBlankProject = this.NewBlankProject.bind(this);
    }

    //New shop project
    NewShopProject() {
        window.location.href = '/projects/new/shop';
    }

    //New portfolio project
    NewPortfolioProject() {

    }

    //New link project
    NewLinkProject() {
        
    }

    //New web app project
    NewWebAppProject() {

    }

    //New blank project
    NewBlankProject() {

    }
    
    render() {
        return(
            <div>
                <a className="ApplicationNewProject-header">1. Project Type</a>
                <br></br>
                <br></br>
                <a className="ApplicationNewProject-description">Choose your project type from static sites to whatever you imagine.</a>
                <br></br>
                <div className="ApplicationNewProject-typescontainer">
                    <div className="ApplicationNewProject-projecttypecontainer">
                        <button onClick={this.NewShopProject} className="ApplicationNewProject-projecttype" style={{backgroundColor: '#F9C11D'}}>
                            <i className="fas fa-store"></i>
                        </button>
                        <br></br>
                        <br></br>
                        <label className="ApplicationNewProject-type" style={{color: '#F9C11D'}}>Shop</label>
                    </div>
                    <div className="ApplicationNewProject-projecttypecontainer">
                        <button onClick={this.NewPortfolioProject} className="ApplicationNewProject-projecttype" style={{marginLeft: '1vw', backgroundColor: '#7289DA'}}>
                            <i className="fas fa-palette"></i>
                        </button>
                        <br></br>
                        <br></br>
                        <label className="ApplicationNewProject-type" style={{color: '#7289DA'}}>Portfolio</label>
                    </div>
                    <div className="ApplicationNewProject-projecttypecontainer">
                        <button onClick={this.NewLinkProject} className="ApplicationNewProject-projecttype" style={{marginLeft: '1vw', backgroundColor: '#0ad48b'}}>
                            <i className="fas fa-link"></i>
                        </button>
                        <br></br>
                        <br></br>
                        <label className="ApplicationNewProject-type" style={{color: '#0ad48b'}}>Link <span></span></label>
                    </div>
                    <br></br>
                    <br></br>
                    <div className="ApplicationNewProject-projecttypecontainer">
                        <button onClick={this.NewWebAppProject} className="ApplicationNewProject-projecttype" style={{backgroundColor: '#e85325'}}>
                            <i className="fas fa-globe"></i>
                        </button>
                        <br></br>
                        <br></br>
                        <label className="ApplicationNewProject-type" style={{color: '#e85325'}}>Web App</label>
                    </div>
                    <div className="ApplicationNewProject-projecttypecontainer">
                        <button onClick={this.NewBlankProject} className="ApplicationNewProject-projecttype" style={{backgroundColor: 'gray', marginLeft: '1vw'}}>
                            <i className="fas fa-plus"></i>
                        </button>
                        <br></br>
                        <br></br>
                        <label className="ApplicationNewProject-type" style={{color: 'gray'}}>Blank</label>
                    </div>
                </div>
            </div>
        )
    }
}

class ApplicationNewProject extends React.Component {
    constructor(props) { 
        super(props)
    }

    render() {
        return(
            <div className="ApplicationNewProject-main">
                <ApplicationHeader current_page={'projects'} />
                <div className="ApplicationNewProject-contentcontainer">
                    <div className="ApplicationNewProject-projectscontainer">
                        <div id="ApplicationNewProject.container" className="ApplicationNewProject-container">
                            <ProjectTypes />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
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
            ReactDOM.render(<ApplicationNewProject />, document.getElementById('root'));
        } else {
            console.log('asd');
            // ReactDOM.render(<NoPage />, document.getElementById('root'));
        }
    }

    render() {
        return(
            <div></div>
        )
    }
}

export default Index;