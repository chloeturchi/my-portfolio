import React from 'react';

import SocialCard from './components/SocialCard/SocialCard';
import upArrow from '../../assets/images/icons/up-arrow.png';
import linkedin from '../../assets/images/icons/linkedin.png'
import './Footer.modules.css';

const Footer = () => {
    const socialMedias = [
        {
            imgSrc: linkedin, 
            title:"LinkdIn",
            link: "https://www.linkedin.com/in/chloeturchi/"
        },
    ]

    return (
        <footer>
            <div className="up-arrow">
                <a href="#home">
                    <img src={upArrow} alt="up arrow"/>
                </a>  
            </div>  
            <SocialCard socialMedias={socialMedias} />
            <p>© 2020 Chloe Turchi - All rights reserved.</p>
    
        </footer>
    );
};

export default Footer;

// Icons made by https://www.flaticon.com/authors/freepik