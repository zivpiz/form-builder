import {Component} from "react";
import React from "react";
import {Link} from 'react-router-dom';


class NavigationBar extends Component {

    render() {
        return (

                <nav className="navbar navbar-dark navbar-expand-lg navbar-light bg-dark">
                    <Link className="navbar-brand" to="/" exact strict>Form Builder</Link>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-item nav-link " to="/" exact strict>Home</Link>
                            <Link className="nav-item nav-link" to="/buildForm" exact strict>Build a Form</Link>
                        </div>
                    </div>
                </nav>




        )
    }
}

export default NavigationBar;