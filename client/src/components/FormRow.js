import {Component} from "react";
import React from "react";
import {Link} from 'react-router-dom';


class FormRow extends Component{


    render(){
        var formId = this.props.formId;
        var submitURL = '/submit/'+formId;
        var viewSubmissionsURL = '/view/'+formId;
        return(
            <tr>
                <th scope="row">{formId}</th>
                <td>{this.props.formName}</td>
                <td>{this.props.numOfSubmissions}</td>
                <td><Link to={submitURL} className="badge badge-light">View</Link></td>
                <td><Link to={viewSubmissionsURL} className="badge badge-light">View</Link></td>
            </tr>
        );
    }
}

export default FormRow;