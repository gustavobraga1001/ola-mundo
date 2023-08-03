import React from 'react'
import styles from './menu.module.css'
import { Link, useLocation } from 'react-router-dom'
import MenuLink from '../MenuLink';

const Menu = () => {

  return (
    <header>
      <nav className={styles.navegacao}>
        <MenuLink to="/">
          Inicio
        </MenuLink>
        <MenuLink to="/sobremim">
          Sobre mim
        </MenuLink>
      </nav>
    </header>
  )
}

export default Menu