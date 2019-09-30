import React from 'react'
import { BrowserRouter as Router, Routes, Link } from 'react-router-dom'

import styles from './stepThree.module.scss'
import PrimaryNav from '../../../components/primary-nav'
import Button from '../../../components/button'
import PrimaryLayout, {
  LeftAlign,
  RightAlign
} from '../../../components/layout/primary/primary-layout'
import TextInput from '../../../components/text-input'
import Pill from '../../../components/pills'

export default function StepThree() {
  return (
    <PrimaryLayout>
      <LeftAlign>
        {/* prettier-ignore */}
        <h2 style={{textAlign:"right"}}>"For the body is not one member, but many." <br/>
        1 Corinthians 12:14</h2>
      </LeftAlign>
      <RightAlign>
        <h1>Why are you here?</h1>
        <h5>Select all that apply</h5>

        <div className={styles.column}>
          <Pill
            btn_style="xlarge"
            text="I'm a project owner and want to collaborate"
          />
          <Pill
            btn_style="xlarge"
            text="I want to contribute to an amazing project"
          />
          <Pill
            btn_style="xlarge"
            text="I like to mentor and disciple people"
          />
          <Pill
            btn_style="xlarge"
            text="I want to learn from people with experience"
          />
          <Pill
            btn_style="xlarge"
            text="I want to meet new friends and network"
          />
        </div>

        <div className={styles.btnMain}>
          <Link to="/ministry">
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
