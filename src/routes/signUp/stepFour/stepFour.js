import React from 'react'
import { BrowserRouter as Router, Routes, Link } from 'react-router-dom'

import styles from './stepFour.module.scss'
import PrimaryNav from '../../../components/primary-nav'
import Button from '../../../components/button'
import PrimaryLayout, {
  LeftAlign,
  RightAlign
} from '../../../components/layout/primary/primary-layout'
import TextInput from '../../../components/text-input'
import Pill from '../../../components/pills'

import Skills from '../../../utils/data/skills.json'

export default function StepFour() {
  return (
    <PrimaryLayout>
      <LeftAlign>
        <h2>You're doing an awesome job signing up!</h2>
        <h2>Remember you can skip at any time and complete at a later date.</h2>
      </LeftAlign>
      <RightAlign>
        <h1>What are your ministry passions?</h1>
        <h5>Select all that apply</h5>

        <div className={styles.scrollRow}>
          {Skills.map((skill, key) => {
            return <Pill btn_style="large" text={skill} key={key} />
          })}
        </div>

        <div className={styles.btnMain}>
          <Link to="/bio">
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
