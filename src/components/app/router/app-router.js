import React from 'react'
import Home from '../../../routes/home'
import SignUp from '../../../routes/signUp'
import Login from '../../../routes/login'
import OAuth2RedirectHandler from '../../../routes/oauth2'

import { BrowserRouter as Router, Route } from 'react-router-dom'

export default function AppRouter() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      {/* {/* <Route path="/about/" component={About} /> */}
      <Route path="/signup/" component={SignUp} />
      <Route path="/login/" component={Login} />
      <Route path="/oauth2/redirect" component={OAuth2RedirectHandler}></Route>
      {/* <Route component={NotFound}></Route> */}
    </Router>
  )
}
