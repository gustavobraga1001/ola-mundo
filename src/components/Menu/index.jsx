import React from 'react'
import styles from './menu.module.css'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <header>
      <nav className={styles.navegacao}>
        <Link to="/" className={styles.link}>Início</Link>
        <Link to="/sobremim" className={styles.link}>Sobre mim</Link>
      </nav>
    </header>
  )
}

export default Menu