import React from 'react'
import styles from './button.module.scss'

export default function Button(props) {
  let style = props.btn_style
  let inverse = props.inverse || null
  if (style === 'large' && inverse === 'inverse') {
    return (
      <button type={props.type} className={styles.btnLarge_inverse}>
        <span>{props.text}</span>
      </button>
    )
  }
  if (style === 'xlarge') {
    return (
      <button type={props.type} className={styles.btnxLarge}>
        <span>{props.text}</span>
      </button>
    )
  }
  if (style === 'xlarge' && inverse === 'inverse') {
    return (
      <button type={props.type} className={styles.btnxLarge_inverse}>
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
  }

  if (style === 'small') {
    return (
      <button type={props.type} className={styles.btnSmall}>
        {props.text}
      </button>
    )
  } else if (style === 'icon') {
    return <button className={styles.btnIcon}>{props.icon}</button>
  } else {
    return <button type="button">Click Me</button>
  }
}
