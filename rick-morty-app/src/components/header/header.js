import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import './header.scss'

const Header = () => {

    return (
        <Fragment>
            <NavLink exact to='/'>Home</NavLink>
            <NavLink to='/characters'>Characters</NavLink>
            <NavLink to='/layout'>Layout</NavLink>
        </Fragment>
    )
}

export default Header