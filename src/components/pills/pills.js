import React from 'react'
import styles from './pills.module.scss'

export default function Pills(props) {
  let style = props.btn_style
  if (style === 'xlarge') {
    return (
      <button type={props.type} className={styles.btnxLarge}>
        <span>{props.text}</span>
      </button>
    )
  }
  if (style === 'large') {
    return (
      <button type={props.type} className={styles.btnLarge}>
        {props.text}
      </button>
    )
  } else if (style === 'icon') {
    return <button className={styles.btnIcon}>{props.icon}</button>
  } else if (style === 'btnxSmall') {
    return (
      <button type={props.type} className={styles.btnxSmall}>
        {props.text}
      </button>
    )
  } else {
    return <button type="button">Click Me</button>
  }
}
