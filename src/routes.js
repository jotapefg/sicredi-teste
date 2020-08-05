import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'

import Login from './pages/Login'
import List from './pages/List'

export default function Routes() {
  return (
    <Switch>
      <Route path='/' exact component={Login} />
      <PrivateRoute path='/dragons' component={List} />
    </Switch>
  )
}

