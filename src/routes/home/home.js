import React from 'react'
import styles from './home.module.scss'
import PrimaryNav from '../../components/primary-nav'
import Button from '../../components/button'
import { BrowserRouter as Router, Routes, Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className={styles.bkg}>
      <div className={styles.layer}>
        <PrimaryNav />
        <div className={styles.btnMain}>
          <Link to="/signup">
            <Button text="Sign Up" btn_style="large" />
          </Link>
        </div>
      </div>
    </div>
  )
}
