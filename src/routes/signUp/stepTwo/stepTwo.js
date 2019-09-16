import React from 'react'
import { BrowserRouter as Router, Routes, Link } from 'react-router-dom'

import styles from './stepTwo.module.scss'
import PrimaryNav from '../../../components/primary-nav'
import Button from '../../../components/button'
import PrimaryLayout, {
  LeftAlign,
  RightAlign
} from '../../../components/layout/primary/primary-layout'
import TextInput from '../../../components/text-input'

export default function StepTwo() {
  return (
    <PrimaryLayout>
      <LeftAlign>
        <h2>
          We'll introduce you, because we think that{' '}
          <u>together, nothing is impossible.</u>
        </h2>
      </LeftAlign>
      <RightAlign>
        <h1>What are you good at?</h1>
        <h5>Select all that apply</h5>

        <div className={styles.form}>
          <TextInput
            text="First Name"
            name="firstName"
            size="large"
            type="firstName"
          />
          <TextInput
            text="Last Name"
            name="lastName"
            type="lastName"
            size="large"
          />
          <TextInput
            text="Username"
            name="Username"
            type="Username"
            size="large"
          />
        </div>

        <div className={styles.btnMain}>
          <Link to="/skills">
            <Button text="Next" btn_style="large" />
          </Link>
        </div>
        <h6>
          <Link to="/login">Skip</Link>
        </h6>
      </RightAlign>
    </PrimaryLayout>
  )
}
