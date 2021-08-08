import React, { Component } from 'react';
import {Link, Route, Switch} from "react-router-dom";
import Contact from "./Contact";
import Skills from "./Skills";
import Footer from "./Footer";
import data from "../data/data.json";
import blob_006 from '../images/blob (6).svg';

class Home extends Component {
    render() {
        return (
                <div>
                    <header>
                        <div id="blob-container-001" className="blob" style={{top: "60%", left: "70%"}}>
                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#FF0066" transform="translate(100 100)"/>
                        </svg>
                        </div>
                        <img src={blob_006} alt="blob_006" className="blob" style={{top: "60%", left: "20%"}}/>
                        <div className="row">
                            <div className="hero-text-box">
                                <h1>Hy I Am <span className="full-colors">Samuel</span></h1>
                                <p>{data.Home}</p>
                                <Link className="btn btn-full" to="/contact">Contact</Link>
                            </div>
                        </div>

                        <Switch>
                            <Route path="/contact">
                                <Contact />
                            </Route>
                        </Switch>
                    </header>
                    <Skills/>
                    <Footer/>
                </div>
        );
    }
}

export default Home;