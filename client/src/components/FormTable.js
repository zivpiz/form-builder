import {Component} from "react";
import React from "react";
import FormRow from './FormRow.js';

class FormTable extends Component {

    constructor(props) {
        super(props);

        this.formRowsArray = this.formRowsArray.bind(this);
    }

    formRowsArray = () => {
        var formRows = [];
        this.props.forms.forEach((form) => {
            formRows.push(
                <FormRow form={form} key={form._id} />);
        });
        return (formRows);
    };

    render() {
        return (
            <table className="table">
                <thead className="thead-light">
                <tr>
                    <th scope="col">Form Id</th>
                    <th scope="col">Form Name</th>
                    <th scope="col"># Submissions</th>
                    <th scope="col">Submit Page</th>
                    <th scope="col">Submissions Page</th>
                </tr>
                </thead>
                <tbody>
                {this.props.forms.length ? this.formRowsArray() : <tr>
                    <td>Loading...</td>
                </tr>}
                </tbody>
            </table>
        )
    }
}

export default FormTable;