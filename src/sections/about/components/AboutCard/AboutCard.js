import React from 'react';

import './AboutCard.modules.css';
import List from '../List/List';

const AboutCards = ({infos}) =>
    <div className="about-cards">
        {infos.map(
            (info, i) => 
            <div className="about-card">
                <div className="about-card__icon-container">
                    <img
                        className="icon-container__icon"
                        src={info.imgSrc}
                        alt={info.title}
                    />
                </div>
                <h3 className="about-card__title">{info.title}</h3>
                <hr/>
                <List listInfo={info.list}/>
            </div>
        )
    }
    </div>
        
export default AboutCards;