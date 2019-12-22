import React from 'react';
import { NavLink } from 'react-router-dom';

import './error.scss'

const ErrorComp = () => (
    <section className='error-wrapper'>
        <p className='error'>Ooops... Error!</p>
        <p className='error-main'>You can return to <NavLink exact to={process.env.PUBLIC_URL + '/'}>Home page</NavLink></p>
    </section>
);

export default ErrorComp