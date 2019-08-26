import React from 'react'
import Home from '../../../routes/home'
import SignUp from '../../../routes/signUp'

import { BrowserRouter as Router, Route } from 'react-router-dom'

export default function AppRouter() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      {/* {/* <Route path="/about/" component={About} /> */}
      <Route path="/signup/" component={SignUp} />
    </Router>
  )
}
