import React from "react";

import Rabbit from '../../animations/Rabbit/Rabbit';
import Form from './components/Form/Form';
import './Contact.modules.css';

const Contact = () => {
    return (
        <section id="contact">
            <h2>Contact</h2>
            <Rabbit />
            <h3>Contact me if you have any question or to work together</h3>
            <Form />
        </section>
    )
};

export default Contact;