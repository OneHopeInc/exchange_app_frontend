import React from 'react'
import styles from './primary-nav.module.scss'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import logo from '../../assets/images/indigitous.svg'

export default function PrimaryNav() {
  return (
    <nav>
      <ul className={styles.nav}>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/">Indigitous</Link>
        </li>
      </ul>
    </nav>
  )
}
