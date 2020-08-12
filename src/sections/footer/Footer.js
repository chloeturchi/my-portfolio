import React from 'react';

import upArrow from '../../assets/images/icons/up-arrow.png';
import './Footer.modules.css';

const Footer = () => {
    return (
        <footer>
            <div className="up-arrow">
                <a href="#home">
                    <img src={upArrow} alt="up arrow"/>
                </a>  
            </div>  
            <p>© 2020 Chloe Turchi - All rights reserved.</p>
    
        </footer>
    );
};

export default Footer;