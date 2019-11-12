import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Routes } from './routes'
import 'bootstrap/dist/css/bootstrap.css';
const NavLinks = () => {
    return (
        <div>
            <nav className = "navbar navbar-default bg-light">
                <ul className = "nav nav-pills navbar-right mr-auto">
                    <li><Link to = {'/home'} className ="nav-link">HOME</Link></li>
                    <li><Link to = {'/about'} className = "nav-link">About</Link></li>
                    <li><Link to = {'/contact'} className = "nav-link">Contact</Link></li>
                    <li><Link to = {'/help'} className ="nav-link">Help</Link></li>
                </ul>
            </nav>
        </div>
    )
}

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <NavLinks />
                    <hr />
                    <Routes />
                </div>
            </Router>
        );
    }
}

export default App;