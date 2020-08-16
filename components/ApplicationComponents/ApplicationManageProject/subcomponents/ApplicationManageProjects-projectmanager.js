import React from 'react';
import ReactDOM from 'react-dom';

//assets
import '../assets/ApplicationManageProjects-projectmanager.css';

//ApplicationComponents
import ApplicationHeader from '../../ApplicationHeader/';

class SubComponent extends React.Component {
    constructor(props) {
        super(props)

        //props
        this.project_info = this.props.project_info;

        //Component functions
        this.Back = this.Back.bind(this);
        this.Design = this.Design.bind(this);
    }

    Back() {
        window.location.href = '/projects';
    }

    Design() {
        window.location.href = '/design/' + this.project_info.project_id;
    }

    render() {
        if(this.project_info.project_type == 'shop') {
            return(
                <div className="ProjectManager-main">
                    <ApplicationHeader current_page={'projects'} />
                    <div className="ProjectManager-contentcontainer">
                        <div id="ProjectManager.container" className="ProjectManager-container">
                            <div className="ProjectManager-managercontainer">
                                <div className="ProjectManager-buttoncontainer">
                                    <button onClick={this.Back} className="ProjectManager-shopbutton" style={{float: 'left'}}>
                                        <i class="fas fa-long-arrow-alt-left" style={{marginRight: '0.5vw'}}></i>
                                        Back
                                    </button>
                                    <button onClick={this.Design} className="ProjectManager-shopbutton" style={{float: 'right'}}>
                                        <i class="fas fa-pencil-alt" style={{marginRight: '0.5vw'}}></i>
                                        Design
                                    </button>
                                </div>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <div>
                                    <a className="ProjectManager-projectname">Project Name:</a>
                                </div>
                                <br></br>
                                <a className="ProjectManager-projectname">{this.project_info.shopdescription}</a>
                                <br></br>
                                <br></br>
                                <div className="ProjectManager-deploycontainer">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default SubComponent;