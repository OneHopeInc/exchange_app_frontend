import React from 'react'
import ProfileCard from '../profileCard'
import Button from '../button'
import styles from './userExchange.module.scss'

export default function UserExchange() {
  return (
    <div className={styles.container}>
      <h2 className={styles.sectionHeader}> Exchange</h2>
      <p className={styles.settingsText}> Edit my frequency</p>

      <div className={styles.exchangeContainer}>
        <h2 className={styles.exchangeNotification}>New Match!</h2>
        <h3 className={styles.exchangeText}>
          We think you'd Love meeting Ben Carson next week!
        </h3>
        <div className={styles.row}>
          <ProfileCard />
          <ProfileCard />
        </div>
      </div>
      <div className={styles.row}>
        <Button text="Schedule" className={styles.btn} type="approve" />
        <Button text="Re-Shedule" className={styles.btn} type="approve" />
        <Button text="Cancel" className={styles.btn} type="cancel" />
      </div>
    </div>
  )
}
