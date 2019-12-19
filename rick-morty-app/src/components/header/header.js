import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.scss'

const Header = () => (
    <header className='header'>
        <nav>
            <ul className='nav-list'>
                <li><NavLink exact to='/'>Home</NavLink></li>
                <li><NavLink to='/characters'>Characters</NavLink></li>
                <li><NavLink to='/layout'>Layout</NavLink></li>
            </ul>
        </nav>
    </header>
    
);

export default Header