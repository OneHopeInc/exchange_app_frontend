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
import Pill from '../../../components/pills'

import Skills from '../../../utils/data/skills.json'

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

        <div className={styles.scrollRow}>
          {Skills.map((skill, key) => {
            return <Pill btn_style="large" text={skill} key={key} />
          })}
        </div>

        <div className={styles.btnMain}>
          <Link to="/involvement">
            <Button text="Next" btn_style="large" />
          </Link>
        </div>
        <h6>
          <Link to="/connections">Skip</Link>
        </h6>
      </RightAlign>
    </PrimaryLayout>
  )
}
