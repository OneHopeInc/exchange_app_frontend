import React from 'react'
import styles from './exchange.module.scss'
import AppLayout from '../../components/layout/app'
import LeftProfile from '../../components/left-profile'
import UserExchange from '../../components/userExchange'

export default function Dashboard() {
  return (
    <AppLayout activeNav="Exchange">
      <div className={styles.container}>
        <LeftProfile />
        <UserExchange />
      </div>
    </AppLayout>
  )
}
