import React from 'react'
import styles from './signUp.module.scss'
import PrimaryNav from '../../components/primary-nav'
import Button from '../../components/button'

export default function SignUp() {
  return (
    <div className={styles.bkg}>
      <div className={styles.layer}>
        <PrimaryNav />
        <div className={styles.btnMain}>
          <Button text="Sign Up" btn_style="large" />
        </div>
      </div>
    </div>
  )
}
