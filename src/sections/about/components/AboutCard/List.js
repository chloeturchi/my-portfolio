import React from 'react';

const List = ({listInfo}) =>
<ul>
{listInfo.map(
    (infoItem, i) =>
    <li>{infoItem}</li>
)}
</ul>

export default List;