import React from 'react';

import './List.modules.css';

const List = ({listInfo}) =>
    <ul>
        {listInfo.map(
            (infoItem, i) =>
            <li className="list-element">{infoItem}</li>
        )}
    </ul>

export default List;