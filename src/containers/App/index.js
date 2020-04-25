// @flow

import React from 'react';
import Container from 'components/Container';
import CreateOrder from 'containers/CreateOrder';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Container>
        <Switch>
          <Route exact path="/">
            <CreateOrder />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}
