import React, {Component} from 'react';
import {loadReCaptcha} from 'react-recaptcha-google'
import Home from './components/Home.js';
import BuildForm from "./components/BuildForm.js";
import SubmitForm from "./components/SubmitForm.js"
import {BrowserRouter as Router, Route} from 'react-router-dom';
import SubmissionsView from "./components/SubmissionsView";

class App extends Component {

    componentDidMount(){
        loadReCaptcha();
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <Route path="/" exact strict component={Home}/>
                    <Route path="/buildForm" exact strict component={BuildForm}/>
                    <Route path="/submit/:formId" exact strict component={SubmitForm}/>
                    <Route path="/view/:formId" exact strict component={SubmissionsView}/>
                </div>
            </Router>
        )
    }
}

export default App;

