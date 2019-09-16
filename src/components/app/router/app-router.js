import React from 'react'
import Home from '../../../routes/home'
import SignUp from '../../../routes/signUp'
import Login from '../../../routes/login'
import OAuth2RedirectHandler from '../../../routes/oauth2'
import StepOne from '../../../routes/signUp/stepOne'
import StepTwo from '../../../routes/signUp/stepTwo'
import { BrowserRouter as Router, Route } from 'react-router-dom'

export default function AppRouter() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/signup/" component={SignUp} />
      <Route path="/identity/" component={StepOne} />
      <Route path="/skills/" component={StepTwo} />

      <Route path="/login/" component={Login} />
      <Route path="/oauth2/redirect" component={OAuth2RedirectHandler}></Route>
      {/* <Route component={NotFound}></Route> */}
    </Router>
  )
}
