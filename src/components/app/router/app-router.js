import React from 'react'
import Home from '../../../routes/home'
import SignUp from '../../../routes/signUp'
import Login from '../../../routes/login'
import Connections from '../../../routes/connections'
import OAuth2RedirectHandler from '../../../routes/oauth2'
import StepOne from '../../../routes/signUp/stepOne'
import StepTwo from '../../../routes/signUp/stepTwo'
import StepThree from '../../../routes/signUp/stepThree'
import StepFour from '../../../routes/signUp/stepFour'
import Bio from '../../../routes/signUp/bio'
import ProfileConfirmation from '../../../routes/signUp/profile'
import Setup from '../../../routes/setup/intro'

import { BrowserRouter as Router, Route } from 'react-router-dom'

export default function AppRouter() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/signup/" component={SignUp} />
      <Route path="/identity/" component={StepOne} />
      <Route path="/skills/" component={StepTwo} />
      <Route path="/involvement/" component={StepThree} />
      <Route path="/ministry/" component={StepFour} />
      <Route path="/bio/" component={Bio} />
      <Route path="/profileConfirmation/" component={ProfileConfirmation} />
      <Route path="/setup/" component={Setup} />

      <Route path="/login/" component={Login} />

      <Route path="/connections/" component={Connections} />

      <Route path="/oauth2/redirect" component={OAuth2RedirectHandler}></Route>
      {/* <Route component={NotFound}></Route> */}
    </Router>
  )
}
