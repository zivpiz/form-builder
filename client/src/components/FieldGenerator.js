import {Component} from "react";
import React from "react";

class FieldGenerator extends Component {
    constructor(props) {
        super(props);
        this.state = {fieldLabel: '', inputName: '', inputType: 'text'};

        this.handleLabelChange = this.handleLabelChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleTypeChange = this.handleTypeChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleLabelChange(event) {
        this.setState({fieldLabel: event.target.value});
    }

    handleNameChange(event) {
        this.setState({inputName: event.target.value});
    }

    handleTypeChange(event) {
        this.setState({inputType: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.sendData(this.state);
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="container">
                    <div className="col"> Field Label:
                        <input type="text" className="form-control" placeholder="Field Label"
                               value={this.state.fieldLabel} onChange={this.handleLabelChange}/>
                    </div>
                    <div className="col">Input Name:
                        <input type="text" className="form-control" placeholder="Input Name" name="inputName"
                               value={this.state.inputName} onChange={this.handleNameChange}/>
                    </div>
                    <div className="col">Input Type:
                        <select className="custom-select mr-sm-2" name="inputType"
                                value={this.state.inputType} onChange={this.handleTypeChange}>
                            <option value="text">Text</option>
                            <option value="color">Color</option>
                            <option value="date">Date</option>
                            <option value="email">Email</option>
                            <option value="tel">Tel</option>
                            <option value="number">Number</option>
                        </select>
                    </div>
                    <div className="col-3">
                        <button type="submit" value="Submit" className="btn btn-primary mb-2"
                                style={{margin: '10px'}}>Add Field
                        </button>
                    </div>
                </div>
            </form>

        );
    }
}

export default FieldGenerator;