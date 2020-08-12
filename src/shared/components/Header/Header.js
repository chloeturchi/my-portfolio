import React from 'react';

import './Header.modules.css';

const Header = props => {
    return <header className="header">
        {props.children}
    </header>;
}

export default Header;