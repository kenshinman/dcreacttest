import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'
import SunRiseSet from '../pages/SunRiseSet'
import Nav from '../components/Nav'

const Routes = () => (
  <Router>
    <div>
    <Nav />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/sunrise-set' component={SunRiseSet} />
    </Switch>
    </div>
  </Router>
);

export default Routes;