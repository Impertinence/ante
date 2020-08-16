import React from 'react';
import ReactDOM from 'react-dom';

class SubComponent extends React.Component {
    constructor(props) {
        super(props)

        //Session
        this.user_info = JSON.parse(window.sessionStorage.getItem('user_info'));

        //Props
        this.current_page = this.props.current_page;
    }

    componentDidMount() {
        var call = {
            token: this.user_info.token,
            secret: this.user_info.secret,
        };

        var http = new XMLHttpRequest();
        var url = 'http://localhost:6969/leviathan/v1/GetMyTeams';
        var params = 'call=' + JSON.stringify(call)

        http.open('POST', url, true);
        http.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        http.send(params);

        http.addEventListener('load', () => {
            var data = JSON.parse(http.responseText);

            //If successful
            if(data.success) {
                var teams = data.data;

                //For each team
                Object.keys(teams).forEach((key) => {
                    var parent = document.getElementById('ApplicationHeader.teamscontainer');
                    var child = document.createElement('div');

                    child.id = "TeamContainer." + teams[key].team_id;
                    
                    parent.appendChild(child);

                    if(teams[key].owner_status == true) {
                        ReactDOM.render(<a href={'http://localhost:3000/teams/' + teams[key].team_id} className="ApplicationHeader-button"><i class="fas fa-crown" style={{marginRight: '1vw', color: '#F9C11D'}}></i> My Team</a>, document.getElementById("TeamContainer." + teams[key].team_id));
                    } else {
                        ReactDOM.render(<a className="ApplicationHeader-button"><i class="fas fa-users" style={{marginRight: '1vw', color: '#0ad48b'}}></i> Boss's Team</a>, document.getElementById("TeamContainer." + teams[key].team_id));
                    }
                });
            }
        });
    }

    render() {
        //If Home page
        if(this.current_page == 'Home') {
            return(
                <div>
                    <div className="ApplicationHeader-buttoncontainer">
                        <a href="" className="ApplicationHeader-buttonselected"><i className="fas fa-home" style={{marginRight: "1vw"}}></i>Home</a>
                        <a href="projects" className="ApplicationHeader-button"><i className="fas fa-boxes" style={{marginRight: "1vw"}}></i>Projects</a>
                    </div>
                    <a className="ApplicationHeader-categoryheader"><i>Manage</i></a>
                    <div className="ApplicationHeader-buttoncontainer">
                    <a href="manager/deploys" className="ApplicationHeader-button"><i className="fas fa-globe" style={{marginRight: "1vw"}}></i> Deploys</a>
                        <a href="manager/dbs" className="ApplicationHeader-button"><i className="fas fa-database" style={{marginRight: "1vw"}}></i> Databases</a>
                        <a href="manager/apis" className="ApplicationHeader-button"><i className="fas fa-project-diagram" style={{marginRight: "1vw"}}></i>APIs</a>
                    </div>
                    <a className="ApplicationHeader-categoryheader"><i>My Teams</i></a>
                    <div className="ApplicationHeader-buttoncontainer">
                        <a href="teams/new" className="ApplicationHeader-button"><i className="fas fa-plus" style={{marginRight: "1vw"}}></i> New Team</a>
                        <br></br>
                        <div id="ApplicationHeader.teamscontainer" className="ApplicationHeader-teamscontainer"></div>
                    </div>
                </div>
            )
        }

        //If projects page
        if(this.current_page == 'projects') {
            return(
                <div>
                    <div className="ApplicationHeader-buttoncontainer">
                        <a href="../app" className="ApplicationHeader-button"><i className="fas fa-home" style={{marginRight: "1vw"}}></i>Home</a>
                        <a href="" className="ApplicationHeader-buttonselected"><i className="fas fa-boxes" style={{marginRight: "1vw"}}></i>Projects</a>
                    </div>
                    <a className="ApplicationHeader-categoryheader"><i>Manage</i></a>
                    <div className="ApplicationHeader-buttoncontainer">
                    <a href="manager/deploys" className="ApplicationHeader-button"><i className="fas fa-globe" style={{marginRight: "1vw"}}></i> Deploys</a>
                        <a href="manager/dbs" className="ApplicationHeader-button"><i className="fas fa-database" style={{marginRight: "1vw"}}></i> Databases</a>
                        <a href="manager/apis" className="ApplicationHeader-button"><i className="fas fa-project-diagram" style={{marginRight: "1vw"}}></i>APIs</a>
                    </div>
                    <a className="ApplicationHeader-categoryheader"><i>My Teams</i></a>
                    <div className="ApplicationHeader-buttoncontainer">
                        <a href="teams/new" className="ApplicationHeader-button"><i className="fas fa-plus" style={{marginRight: "1vw"}}></i> New Team</a>
                        <br></br>
                        <div id="ApplicationHeader.teamscontainer" className="ApplicationHeader-teamscontainer"></div>
                    </div>
                </div>
            )
        }

        //If projects page
        if(this.current_page == 'projects/new') {
            return(
                <div>
                    <div className="ApplicationHeader-buttoncontainer">
                        <a href="../../app" className="ApplicationHeader-button"><i className="fas fa-home" style={{marginRight: "1vw"}}></i>Home</a>
                        <a href="" className="ApplicationHeader-buttonselected"><i className="fas fa-boxes" style={{marginRight: "1vw"}}></i>Projects</a>
                    </div>
                    <a className="ApplicationHeader-categoryheader"><i>Manage</i></a>
                    <div className="ApplicationHeader-buttoncontainer">
                    <a href="manager/deploys" className="ApplicationHeader-button"><i className="fas fa-globe" style={{marginRight: "1vw"}}></i> Deploys</a>
                        <a href="manager/dbs" className="ApplicationHeader-button"><i className="fas fa-database" style={{marginRight: "1vw"}}></i> Databases</a>
                        <a href="manager/apis" className="ApplicationHeader-button"><i className="fas fa-project-diagram" style={{marginRight: "1vw"}}></i>APIs</a>
                    </div>
                    <a className="ApplicationHeader-categoryheader"><i>My Teams</i></a>
                    <div className="ApplicationHeader-buttoncontainer">
                        <a href="teams/new" className="ApplicationHeader-button"><i className="fas fa-plus" style={{marginRight: "1vw"}}></i> New Team</a>
                        <br></br>
                        <div id="ApplicationHeader.teamscontainer" className="ApplicationHeader-teamscontainer"></div>
                    </div>
                </div>
            )
        }

        //If project type page
        if(this.current_page == 'projects/new/type') {
            return(
                <div>
                    <div className="ApplicationHeader-buttoncontainer">
                        <a href="../../app" className="ApplicationHeader-button"><i className="fas fa-home" style={{marginRight: "1vw"}}></i>Home</a>
                        <a href="" className="ApplicationHeader-buttonselected"><i className="fas fa-boxes" style={{marginRight: "1vw"}}></i>Projects</a>
                    </div>
                    <a className="ApplicationHeader-categoryheader"><i>Manage</i></a>
                    <div className="ApplicationHeader-buttoncontainer">
                    <a href="manager/deploys" className="ApplicationHeader-button"><i className="fas fa-globe" style={{marginRight: "1vw"}}></i> Deploys</a>
                        <a href="manager/dbs" className="ApplicationHeader-button"><i className="fas fa-database" style={{marginRight: "1vw"}}></i> Databases</a>
                        <a href="manager/apis" className="ApplicationHeader-button"><i className="fas fa-project-diagram" style={{marginRight: "1vw"}}></i>APIs</a>
                    </div>
                    <a className="ApplicationHeader-categoryheader"><i>My Teams</i></a>
                    <div className="ApplicationHeader-buttoncontainer">
                        <a href="../../teams/new" className="ApplicationHeader-button"><i className="fas fa-plus" style={{marginRight: "1vw"}}></i> New Team</a>
                        <br></br>
                        <div id="ApplicationHeader.teamscontainer" className="ApplicationHeader-teamscontainer"></div>
                    </div>
                </div>
            )
        }

        //If teams page
        if(this.current_page == 'teams/new') {
            return(
                <div>
                    <div className="ApplicationHeader-buttoncontainer">
                        <a href="../../app" className="ApplicationHeader-button"><i className="fas fa-home" style={{marginRight: "1vw"}}></i>Home</a>
                        <a href="../../projects" className="ApplicationHeader-button"><i className="fas fa-boxes" style={{marginRight: "1vw"}}></i>Projects</a>
                    </div>
                    <a className="ApplicationHeader-categoryheader"><i>Manage</i></a>
                    <div className="ApplicationHeader-buttoncontainer">
                    <a href="../../manager/deploys" className="ApplicationHeader-button"><i className="fas fa-globe" style={{marginRight: "1vw"}}></i> Deploys</a>
                        <a href="../../manager/dbs" className="ApplicationHeader-button"><i className="fas fa-database" style={{marginRight: "1vw"}}></i> Databases</a>
                        <a href="../../manager/apis" className="ApplicationHeader-button"><i className="fas fa-project-diagram" style={{marginRight: "1vw"}}></i>APIs</a>
                    </div>
                    <a className="ApplicationHeader-categoryheader"><i>My Teams</i></a>
                    <div className="ApplicationHeader-buttoncontainer">
                        <a href="" className="ApplicationHeader-buttonselected"><i className="fas fa-plus" style={{marginRight: "1vw"}}></i> New Team</a>
                        <br></br>
                        <div id="ApplicationHeader.teamscontainer" className="ApplicationHeader-teamscontainer"></div>
                    </div>
                </div>
            )
        }
    }
}

export default SubComponent;