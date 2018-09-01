import React, {Component} from 'react';
import NavigationBar from "./NavigationBar.js";
import HttpService from '../services/http-service.js'
import './Styles.css'
import SubmitFormRow from "./SubmitFormRow";

const http = new HttpService();

class SubmitForm extends Component {

    constructor(props) {
        super(props);
        this.state = {form: {}, submission: []};

        this.fieldRowsArray = this.fieldRowsArray.bind(this);
        this.updateSubmission = this.updateSubmission.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        var formId = this.props.match.params.formId;
        var self = this;
        http.loadForm(formId)
            .then((form) => {
                var submission = [];
                form.fields.forEach((field) => {
                    submission.push({
                        fieldLabel: field.fieldLabel,
                        inputName: field.inputName,
                        inputType: field.inputType,
                        input: ''
                    });
                });
                self.setState({form: form, submission: submission});
            })
            .catch(() => {
                console.log("Error loading data.");
            });
    }

    updateSubmission(newField) {
        var submission = this.state.submission;
        var foundIndex = submission.findIndex(field => field.fieldLabel === newField.fieldLabel);
        submission[foundIndex] = newField;
        this.setState({submission: submission});
    }

    fieldRowsArray = () => {
        var fieldRows = [];
        this.state.form.fields.forEach((field) => {
            fieldRows.push(
                <SubmitFormRow field={field} updateData={this.updateSubmission}/>
            );
        });
        return (fieldRows);
    };

    handleSubmit(event) {
        event.preventDefault();
        http.addSubmission(this.state.form.formId, this.state.submission);
        window.location.replace("http://localhost:3000/");
    }


    render() {
        return (
            <div className="SubmitForm">
                <NavigationBar/>
                <div className="container row justify-content-center">
                    <form onSubmit={this.handleSubmit}>
                        <table className="table">
                            <thead className="thead-light">
                            <tr>
                                <th scope="col">Field Label</th>
                                <th scope="col">Input Name</th>
                                <th scope="col">Your Input</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.state.submission.length ? this.fieldRowsArray() : ''}
                            <tr>
                                <td colspan="3">
                                    <button type="submit" value="Submit" className="btn btn-lg btn-primary">Submit Form
                                    </button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </form>
                </div>
            </div>
        )
            ;
    }
}

export default SubmitForm;

