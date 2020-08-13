import React from 'react';

import Birds from '../../animations/Birds/Birds';
import Clouds from '../../animations/Clouds/Clouds';

import AboutCard from './components/AboutCard/AboutCard';
import technologies from '../../assets/images/icons/technologies.png'
import skills from '../../assets/images/icons/human-resources.png'
import person from '../../assets/images/icons/person.png';
import './About.modules.css';

const About = () => {
    const infos = [
        {
            imgSrc: technologies, 
            title:"Technologies",
            list: [
                "HTML", 
                "CSS",
                "JAVASCRIPT",
                "REACT",
                "NODE",
                "EXPRESS",
                "GIT",
                "JEST",
                "SASS"
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
            imgSrc: person, 
            title:"I Like",
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
            <p className="about__presentation">I am a creativ and curious person who really likes to code User Interfaces and create ne applications. I also appreciate to learn new things by myself and to stay informed about technologies</p>
            <Birds />
            <AboutCard infos={infos} />
        </section>
    )
};

export default About;