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
        this.state.form.submissions[0].forEach((sub) => {
            allHeaders.push(
                <th scope="col">{sub.inputName}</th>
            );
        });
        return allHeaders;
    };

    createTableBody = () => {
        var body = [];
        this.state.form.submissions.forEach((sub) => {
            body.push(
                <tr>
                    {this.createTableRow(sub)}
                </tr>
            );
        });
        return body;
    };

    createTableRow = (sub) => {
        var row = [];
        sub.forEach((field) => {
            var colorStyle:{
                backgroundColor: field.input
            };

            row.push(
                <td style ={field.inputType === 'color'? {backgroundColor: field.input} : {}}>
                    {field.inputType !== 'color' ? field.input: ''}
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
                            {this.state.loading ? '' : this.createTableHeaders()}
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.loading ? '' : this.createTableBody()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
            ;
    }
}

export default SubmissionsView;

