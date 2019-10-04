import React from 'react'
import styles from './searchBar.module.scss'
import TextInput from '../text-input'

export default function SearchBar(props) {
  return (
    <div>
      <TextInput size="search" />
    </div>
  )
}
