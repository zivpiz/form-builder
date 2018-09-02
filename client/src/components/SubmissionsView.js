import React, {Component} from 'react';
import NavigationBar from "./NavigationBar.js";
import HttpService from '../services/http-service.js'
import './Styles.css'

const http = new HttpService();

class SubmissionsView extends Component {

    constructor(props) {
        super(props);
        this.state = {form: {}, loading: true};

        this.createTableHeaders = this.createTableHeaders.bind(this);
        this.createTableBody = this.createTableBody.bind(this);
        this.createTableRow = this.createTableRow.bind(this);
    }

    componentDidMount() {
        var formId = this.props.match.params.formId;
        var self = this;
        http.loadForm(formId)
            .then((form) => {
                if (form.submissions.length > 0)
                    self.setState({form: form, loading: false});
            })
            .catch(() => {
                console.log("Error loading data.");
            });
    }

    createTableHeaders = () => {
        var allHeaders = [];
        var key = 0;
        this.state.form.submissions[0].forEach((sub) => {
            allHeaders.push(
                <th key={++key} scope="col">{sub.inputName}</th>
            );
        });
        return allHeaders;
    };

    createTableBody = () => {
        var body = [];
        var key = 0;
        this.state.form.submissions.forEach((sub) => {
            body.push(
                <tr key={++key}>
                    {this.createTableRow(sub)}
                </tr>
            );
        });
        return body;
    };

    createTableRow = (sub) => {
        var row = [];
        var key = 0;
        sub.forEach((field) => {
            row.push(
                <td key={++key} style={field.inputType === 'color' ? {backgroundColor: field.input} : {}}>
                    {field.inputType !== 'color' ? field.input : ''}
                </td>
            );
        });
        return row;
    };


    render() {
        return (
            <div className="SubmissionsView">
                <NavigationBar/>
                <div className="container">
                    <table className="table">
                        <thead className="thead-light">
                        <tr>
                            {this.state.loading ? <td>Loading...</td> : this.createTableHeaders()}
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.loading ? <tr>
                            <td>Loading...</td>
                        </tr> : this.createTableBody()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
            ;
    }
}

export default SubmissionsView;

