import {Component} from "react";
import React from "react";

class FieldsView extends Component {

    constructor(props) {
        super(props);

        this.fieldRowsArray = this.fieldRowsArray.bind(this);
        this.capitalizeFirstLetter = this.capitalizeFirstLetter.bind(this);
    }

    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    fieldRowsArray = () => {
        var fields = [];
        var key = 0;
        this.props.entries.forEach((field) => {
            fields.push(
                <tr key={++key}>
                    <td>{field.fieldLabel}</td>
                    <td>{field.inputName}</td>
                    <td>{this.capitalizeFirstLetter(field.inputType)}</td>
                </tr>
            );
        });
        return (fields);
    };

    render() {
        return (
            <table className="table">
                <thead className="thead-light">
                <tr>
                    <th scope="col">Field Label</th>
                    <th scope="col">Input Name</th>
                    <th scope="col">Input Type</th>
                </tr>
                </thead>
                <tbody>
                {this.fieldRowsArray()}
                </tbody>
            </table>
        )
    }
}

export default FieldsView;