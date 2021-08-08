import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Home from './Home'
import Contact from './Contact'

class Navbar extends Component {
    render() {
        return (
            <Router>
                <div>
                    <nav>
                        <div className="row">
                            <ul className="main-nav">
                                <li><Link to="/" rel="noopener noreferrer">Home</Link></li>
                                <li><a href="https://github.com/Kanji2137" target="_blank" rel="noopener noreferrer">My Github</a></li>
                                <li><Link className="btn btn-full" to="/contact" rel="noopener noreferrer">Contact</Link></li>
                            </ul>
                        </div>
                    </nav>

                    <Switch>
                        <Route path="/contact">
                            <Contact />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default Navbar;