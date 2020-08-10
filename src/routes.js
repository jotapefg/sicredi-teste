import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'

import Login from './pages/Login'
import List from './pages/List'
import AddDragon from './pages/AddDragon'

export default function Routes() {
  return (
    <Switch>
      <Route path='/' exact component={Login} />
      <PrivateRoute path='/dragons' exact component={List} />
      <PrivateRoute path='/dragons/add' component={AddDragon} />
      <Route path='*' component={Login} />
    </Switch>
  )
}

