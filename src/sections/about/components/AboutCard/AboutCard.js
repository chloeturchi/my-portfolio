import React from 'react';

import './AboutCard.modules.css';
import List from './List';

const AboutCards = ({infos}) =>
    <div className="cards">
        {infos.map(
            (info, i) => 
            <div className="card">
                <div className="icon-container">
                    <img
                        className="icon"
                        src={info.imgSrc}
                        alt={info.title}
                    />
                </div>
                <h3 className="bold">{info.title}</h3>
                <hr/>
                <List listInfo={info.list}/>
            </div>
        )
    }
    </div>
        
export default AboutCards;