import {Component} from "react";
import React from "react";

class FieldsView extends Component {

    constructor(props){
        super(props);

        //Bind functions
        this.fieldRowsArray = this.fieldRowsArray.bind(this);
    }


    fieldRowsArray = () =>{
        var fields = [];
        this.props.entries.forEach((field) =>{
            fields.push(
                <tr>
                    <td>{field.fieldLabel}</td>
                    <td>{field.inputName}</td>
                    <td>{field.inputType}</td>
                </tr>
            );
        });
        return (fields);
    };

    render(){
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