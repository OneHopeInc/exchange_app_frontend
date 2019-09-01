import React from 'react'
import styles from './button.module.scss'

export default function Button(props) {
  let style = props.btn_style
  if (style === 'large') {
    return (
      <button type={props.type} className={styles.btnLarge}>
        {props.text}
      </button>
    )
  } else if (style === 'icon') {
    return <button className={styles.btnIcon}>{props.icon}</button>
  } else {
    return <button type="button">Click Me</button>
  }
}
