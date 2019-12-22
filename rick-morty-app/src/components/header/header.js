import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.scss'

const Header = () => (
    <header className='header'>
        <nav>
            <ul className='nav-list'>
                <li><NavLink exact to={process.env.PUBLIC_URL + '/'}>Home</NavLink></li>
                <li><NavLink to={process.env.PUBLIC_URL + '/characters'}>Characters</NavLink></li>
                <li><NavLink to={process.env.PUBLIC_URL + '/layout'}>Layout</NavLink></li>
            </ul>
        </nav>
    </header>
    
);

export default Header