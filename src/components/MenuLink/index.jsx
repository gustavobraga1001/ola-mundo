import styles from './menuLink.module.css'
import { NavLink } from 'react-router-dom';

import React from 'react'

const MenuLink = ({ children, to }) => {


    return (
        <NavLink
            className={({ isActive }) => `
                ${styles.link}
                ${isActive ? styles.linkDestacado : ""}
            `}
            to={to}
            end
        >
            {children}
        </NavLink>
    )
}

export default MenuLink