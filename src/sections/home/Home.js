import React from 'react';

import Moon from '../../animations/Moon/Moon';
import Stars from '../../animations/Stars/Stars';
import './Home.modules.css';

const Home = () => {
    return (
        <section id="home">
            <div className="stars-moon-container">
                <Moon />
                <Stars />
            </div>
            <h1>I am a Front-end developer</h1>
            <h3>My name is Chloe, nice to meet you!</h3>
        </section>
    )
};

export default Home;