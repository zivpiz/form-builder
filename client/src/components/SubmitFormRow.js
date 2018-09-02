import {Component} from "react";
import React from "react";

class SubmitFormRow extends Component {

    constructor(props) {
        super(props);
        this.state = {input: ''};

        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(event) {
        this.setState({
            input: event.target.value
        });
        this.props.updateData({
            fieldLabel: this.props.field.fieldLabel,
            inputName: this.props.field.inputName,
            inputType: this.props.field.inputType,
            input: event.target.value
        });
    }

    render() {
        return (
            <tr>
                <td>{this.props.field.fieldLabel}</td>
                <td>{this.props.field.inputName}</td>
                <td><input type={this.props.field.inputType} className="form-control"
                           value={this.state.input} onChange={this.handleChange}/></td>
            </tr>
        );
    }
}

export default SubmitFormRow;