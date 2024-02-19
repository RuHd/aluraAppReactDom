import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './Menu.module.css'

const Menu = () => {
  const location = useLocation()

  return (
    <header>
        <nav className={styles.Menu}>
            <Link to="/" className={location.pathname == "/" ? styles.selected : ""}>
                Inicio
            </Link>
            <Link to="/sobremim" className={location.pathname == "/sobremim" ? styles.selected : ""}>
                Sobre Mim
            </Link>
        </nav>
    </header>
    
  )
}

export default Menu