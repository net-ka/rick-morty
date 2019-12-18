import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import './error.scss'

const ErrorComp = () => {

    return (
    <Fragment>
        <p>Error</p>
        <p>You can return to <NavLink exact to='/'>Home page</NavLink></p>
    </Fragment>
    )
}

export default ErrorComp