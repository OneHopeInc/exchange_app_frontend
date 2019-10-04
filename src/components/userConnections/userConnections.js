import React from 'react'
import { BrowserRouter as Router, Routes, Link } from 'react-router-dom'
import ConnectionCard from '../connectionCard'
import styles from './userConnections.module.scss'
import SearchBar from '../searchBar'

export default function UserConnections() {
  return (
    <div className={styles.container}>
      <div className={styles.searchContainer}>
        <SearchBar />
      </div>
      <h2 className={styles.sectionHeader}>Recent Connections (3)</h2>
      <div className={styles.row}>
        <ConnectionCard />
        <ConnectionCard />
        <ConnectionCard />
      </div>
      <h2 className={styles.sectionHeader}>All Connections</h2>
      <div className={styles.row}>
        <ConnectionCard />
        <ConnectionCard />
        <ConnectionCard />
        <ConnectionCard />
        <ConnectionCard />
      </div>
    </div>
  )
}
