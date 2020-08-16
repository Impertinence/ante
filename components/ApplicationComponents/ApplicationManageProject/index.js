import React from 'react';
import ReactDOM from 'react-dom';

import './assets/index.css';

//SubComponents
import ProjectManager from './subcomponents/ApplicationManageProjects-projectmanager';

class Index extends React.Component {
    constructor(props) {
        super(props)

        //session
        this.user_info = JSON.parse(window.sessionStorage.getItem('user_info'));

        //props
        this.project_id = this.props.match.params.project_id;
    }

    componentDidMount() {
        var call = {
            token: this.user_info.token,
            secret: this.user_info.secret,
            data: {
                project_id: this.project_id
            }
        };

        var http = new XMLHttpRequest();
        var url = 'http://localhost:6969/leviathan/v1/GetProjectByID';
        var params = 'call=' + JSON.stringify(call);

        http.open('POST', url, true);
        http.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        http.send(params);

        http.addEventListener('load', function(){
            var data = JSON.parse(http.responseText);
            
            if(data.error) {
                
            } else {
                var project_info = data.data;

                ReactDOM.render(<ProjectManager project_info={project_info} />, document.getElementById('ApplicationManageProject.container'));
            }
        });
    }

    render() {
        return(
            <div id="ApplicationManageProject.container" className="ApplicationManageProject-container">

            </div>
        )
    }
}

export default Index;