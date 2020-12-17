import React from 'react';
import Navigation from "../components/Navigation";
import {FaMapMarkerAlt} from 'react-icons/fa';
import {FaMobileAlt} from 'react-icons/fa';
import {FaEnvelope} from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="contact">
            <Navigation/>
            <div className="contactContent">
                <div className="header"/>
                <div className="contactBox">
                    <h1>Contactez-moi</h1>
                    <ul>
                        <li>
                            <FaMapMarkerAlt/>
                            <span>Orléans</span>
                        </li>
                        <li>
                            <FaMobileAlt/>
                            06 27 12 85 97
                        </li>
                        <li>
                            <FaEnvelope/>
                            toua.va45@gmail.com
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Contact;