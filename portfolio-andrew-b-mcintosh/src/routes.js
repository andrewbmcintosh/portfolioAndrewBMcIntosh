import React, { Component } from 'react'
import { Route, HashRouter, Switch } from 'react-router-dom'
import Main from './components/Main';


export class Routes extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
            <Route exact path='/' component={ Main } />
        </Switch>

      </HashRouter>
    )
  }
}

export default Routes
