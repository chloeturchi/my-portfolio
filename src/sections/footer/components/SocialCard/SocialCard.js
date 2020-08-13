import React from 'react';

import './SocialCard.modules.css';

const SocialCard = ({socialMedias}) =>
    <div className="social-container">
        {socialMedias.map(
            (socialMedia, i) => 
            <div className="social-card">
                <a href={socialMedia.link}
                    target= "_blank" rel="noopener noreferrer">
                    <img
                        className="social-card__icon"
                        src={socialMedia.imgSrc}
                        alt={socialMedia.title}
                    />
                </a>
            </div>
        )
    }
    </div>
        
export default SocialCard;