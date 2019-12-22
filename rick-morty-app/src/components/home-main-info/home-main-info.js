import React from 'react';
import { Link } from 'react-router-dom';

import './home-main-info.scss'

const HomeMainInfo = () => (
    <section className='home-wrapper'>
        <h1 className='title'>Frontend Test Task</h1>
        <p>You can find Rick & Morty cartoon characters info and an example of given layout on this website</p>
        <div>
            <Link to='/characters'>Rick & Morty</Link>
            <Link to='/layout'>Layout</Link>
        </div>
    </section>
);

export default HomeMainInfo