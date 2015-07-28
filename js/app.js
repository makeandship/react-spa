import React from 'react';   
import { history } from 'react-router/lib/BrowserHistory';
import { Router, Navigation, Route, Link } from 'react-router';

import Login from './components/Login.js';
import App from './components/App.js';
import Index from './components/Index.js';

let NotFound = React.createClass({
  render() {
    return <h1>Not found</h1>;
  }
});

require('../css/main.scss');

React.render((
  <Router history={history}>
    <Route component={App}>
      <Route path="/" component={Index}/>
      <Route path="/login" component={Login}/>
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>
), document.body);