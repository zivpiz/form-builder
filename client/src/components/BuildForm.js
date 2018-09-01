import React, {Component} from 'react';
import NavigationBar from "./NavigationBar.js";
import FieldGenerator from "./FieldGenerator.js"
import FieldsView from "./FieldsView.js"
import HttpService from '../services/http-service.js'
import "./Styles.css"

const http = new HttpService();

class BuildForm extends Component {

    constructor(props) {
        super(props);

        this.state = {entries: [], formName: ""};
        this.getEntry = this.getEntry.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    getEntry(entry) {
        var newEntry = {
            fieldLabel: entry.fieldLabel,
            inputName: entry.inputName,
            inputType: entry.inputType
        };
        this.setState(prevState => ({
            entries: [...prevState.entries, newEntry],
            formName: prevState.formName
        }));
    }

    handleNameChange(event) {
        this.setState({
            entries: this.state.entries,
            formName: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        http.addNewForm(this.state);
        window.location.replace("http://localhost:3000/");
    }


    render() {
        return (
            <div className="BuildForm">
                <NavigationBar/>
                <div className="container" style={{margin: '20px'}}>
                    <div className="row">
                        <div className="col-3">
                            <FieldGenerator sendData={this.getEntry}/>
                            <form onSubmit={this.handleSubmit}>
                                <div className="col">Form Name:
                                    <input type="text" className="form-control" placeholder="Form Name" name="inputName"
                                           value={this.state.formName} onChange={this.handleNameChange}/>
                                    <button type="submit" value="Submit" className="btn btn-lg btn-primary"
                                            style={{margin: '10px'}}>Save Form
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="col-9">
                            <FieldsView entries={this.state.entries}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BuildForm;

