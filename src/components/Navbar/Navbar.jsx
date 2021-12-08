import React from 'react';
import i from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

console.log(i);

const Navbar = () => {
    return (
        <nav className={i.nav}>
            <div className={i.item}>
                <NavLink to='/homepage' activeClassName={i.activeLink}>Homepage</NavLink>
            </div>
            <div className={i.item}>
                <NavLink to='/diagrams' activeClassName={i.activeLink}>Diagrams</NavLink>
            </div>
            <div className={i.item}>
                <NavLink to='/settings' activeClassName={i.activeLink}>Settings</NavLink>
            </div>
            <div className={i.item}>
                <NavLink to='/about' activeClassName={i.activeLink}>About</NavLink>
            </div>
        </nav>
    );
};
export default Navbar;