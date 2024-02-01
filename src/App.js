import React from 'react'
import {Route, Switch} from 'react-router-dom'

import Header from './components/Header'

import Home from './components/Home'
import About from './components/About'
import NotFound from './components/NotFound'

const App = () => (
  <>
    <Header />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route component={NotFound} />
    </Switch>
  </>
)

export default App
