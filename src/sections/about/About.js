import React from 'react';

import Birds from '../../animations/Birds/Birds';
import Clouds from '../../animations/Clouds/Clouds';

import AboutCard from './components/AboutCard/AboutCard';
import dev from '../../assets/images/icons/dev.png'
import skills from '../../assets/images/icons/skills.png'
import hobbies from '../../assets/images/icons/hobbies.png';
import './About.modules.css';

const About = () => {
    const infos = [
        {
            imgSrc: dev, 
            title:"Technologies",
            list: [
                "HTML", 
                "CSS",
                "JAVASCRIPT",
                "REACT/REDUX",
                "GIT/GITHUB",
                "JEST",
                "TERMINAL",
                "SASS",
                "NODE"
            ]
        },
        {
            imgSrc: skills, 
            title:"Skills",
            list: [
                "English",
                "Team work",
                "Responsiv Design",
                "Build complete interfaces",
                "Performances",
                "Client needs analysis",
                "Data requests and storage",
                "Use of frameworks",
                "Create documentation"
            ]
        },
        {
            imgSrc: hobbies, 
            title:"Hobbies",
            list: [
                "Digital drawing",
                "Paper drawing",
                "Piano",
                "Tennis",
                "Danse",
                "Languages",
                "Travels",
                "Video-games",
                "Animes",
            ]
        },
    ]

    return (
        <section id="about">
            <h2 className="about__title">ABOUT</h2>
            <Clouds />
            <p className="about__presentation">I am a creativ and curious person who really likes to code User Interfaces and create applications. I also appreciate to learn new things by myself and to stay informed about technologies</p>
            <Birds />
            <AboutCard infos={infos} />
        </section>
    )
};

export default About;