import React, {Component} from 'react';
import HttpService from '../services/http-service.js'
import FormTable from './FormTable.js';
import NavigationBar from "./NavigationBar";
import "./Styles.css"


const http = new HttpService();

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {forms: []};

        //Bind functions
        this.loadData = this.loadData.bind(this);
    }

    loadData = () => {
        var self = this;
        http.getForms()
            .then((forms) => {
                self.setState({forms: forms});
            })
            .catch(() => {
                console.log("Error loading data.");
            });
    };

    componentDidMount() {
        this.loadData();
    }

    render() {
        return (
                <div className="Home">
                    <NavigationBar/>
                    <div className="container" id="main-page">
                        <FormTable forms={this.state.forms}/>
                    </div>
                </div>
        )

    }
}


export default App;

