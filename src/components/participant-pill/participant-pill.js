import React from 'react'
import styles from './participant-pill.module.scss'
import Pill from '../pills'

export default function ParticipantPill(props) {
  return (
    <div className={styles.container}>
      <i className="fa fa-times-circle medium-icon"></i>
      <Pill text="Liam Savage" />
    </div>
  )
}
