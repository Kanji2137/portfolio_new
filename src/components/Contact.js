import React, { Component } from 'react';
import legoBoy from '../images/legoBoy.png'; 

class Contact extends Component {
    render() {
        return (
            <div className="contact">
                <div className="contact">
                    <h1>Get in touch</h1>
                    <h3><div className="mail-in-contact">samuel.zabczynski@gmail.com</div></h3>
                </div>
                <img src={legoBoy} alt="lego boy" className="contact-img"/>
            </div>
        );
    }
}

export default Contact; 