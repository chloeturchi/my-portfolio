import React, { useState } from 'react';

import Header from '../Header/Header';
import NavLinks from './NavLinks/NavLinks';
import SideDrawer from './SideDrawer/SideDrawer';
import Backdrop from '../Backdrop/Backdrop';
import './Navigation.modules.css';

const MainNavigation = () => {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);

    const openDrawerHandler = () => {
        setDrawerIsOpen(true);
    };

    const closeDrawerHandler = () => {
        setDrawerIsOpen(false);
    }

    return (
        <>
            {drawerIsOpen && 
                <Backdrop onClick={closeDrawerHandler} />}
                <SideDrawer 
                    show={drawerIsOpen}
                    onClick={closeDrawerHandler}>
                    <nav className="navigation__drawer-nav">
                        <NavLinks />
                    </nav>
                </SideDrawer>
                <Header>
                    <button 
                        className="navigation__menu-btn"
                        onClick={openDrawerHandler}>
                        <span/>
                        <span/>
                        <span/>
                    </button>
                    <nav className="navigation__header-nav">
                        <NavLinks />
                    </nav>
                </Header>
        </>
    )
}


export default MainNavigation;