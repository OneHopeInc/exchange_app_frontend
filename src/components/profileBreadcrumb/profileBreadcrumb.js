import React from 'react'
import { BrowserRouter as Router, Routes, Link } from 'react-router-dom'
import Pills from '../pills'
import styles from './profileBreadcrumb.module.scss'
import logo from '../../assets/images/indigitous.svg'
import LocationIcon from '../../assets/images/icons/location.svg'
import SettingsIcon from '../../assets/images/icons/settings.svg'

export default function ProfileBreadcrumb() {
  return (
    <div className={styles.container}>
      <div className={styles.backBtn}>
        <i className="fa fa-arrow-left large-icon"></i>
        <h3>Liam's Profile</h3>
      </div>
    </div>
  )
}
