import React from 'react'
import styles from './button.module.scss'

export default function Button(props) {
  let size = props.btn_style
  if (size == 'large') {
    return (
      <button type="button" className={styles.btnLarge}>
        {props.text}
      </button>
    )
  }
}
