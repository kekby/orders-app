// @flow

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Container from 'components/Container';
import CreateOrder from 'containers/CreateOrder';
import Orders from 'containers/Orders';

export default function App() {
  return (
    <Router>
      <Container>
        <Switch>
          <Route exact path="/">
            <CreateOrder />
          </Route>
          <Route exact path="/orders">
            <Orders />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}
