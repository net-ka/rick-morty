import React from 'react';
import { NavLink } from 'react-router-dom';

import './home-main-info.scss'

const HomeMainInfo = () => (
    <section className='home-wrapper'>
        <h1 className='title'>Frontend Test Task</h1>
        <p>You can find Rick & Morty cartoon characters info and an example of given layout on this website</p>
        <div>
            <button><NavLink to='/characters'>Rick & Morty</NavLink></button>
            <button><NavLink to='/layout'>Layout</NavLink></button>
        </div>
    </section>
);

export default HomeMainInfo