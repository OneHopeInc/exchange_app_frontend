import React from 'react'
import styles from './app-nav.module.scss'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import logo from '../../assets/images/indigitous.svg'

export default function AppNav(props) {
  return (
    <nav className={styles.container}>
      <ul className={styles.nav}>
        {props.activeNav == 'Connections' ? (
          <li className={styles.activeNav}>
            <Link to="/">Connections</Link>
          </li>
        ) : (
          <li className={styles.inactiveNav}>
            <Link to="/">Connections</Link>
          </li>
        )}
        <li className={styles.inactiveNav}>
          <Link to="/">Calender</Link>
        </li>
        <li className={styles.inactiveNav}>
          <Link to="/">Exchange</Link>
        </li>
      </ul>
    </nav>
  )
}
