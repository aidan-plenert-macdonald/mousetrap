import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router';
import App from "./App";
import createHistory from 'history/createBrowserHistory';

class AppRouter extends Component {
  render() {
    return (
      <Router history={createHistory()}>
        <Switch>
          <Route path="/" exact={true} component={App}></Route>
        </Switch>
      </Router>
    );
  }
}

export default AppRouter;
