import React from 'react'
import styles from "../styles/Navigation.module.css"
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
        <ul>
            <li>
                <Link to="/">HOME</Link>
            </li>
            <li>
                <Link to="/about">ABOUT</Link>
            </li>
            <li>
                <Link to="/profile:username">PROFILE</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navigation