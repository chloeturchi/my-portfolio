import React from 'react';

import './AboutCard.modules.css';
import List from '../List/List';

const AboutCard = ({infos}) =>
    <div className="about-container">
        {infos.map(
            (info, i) => 
            <div className="about-card">
                <img
                    className="about-card__icon"
                    src={info.imgSrc}
                    alt={info.title}
                />
                <h3 className="about-card__title">{info.title}</h3>
                <hr/>
                <List listInfo={info.list}/>
            </div>
        )
    }
    </div>
        
export default AboutCard;