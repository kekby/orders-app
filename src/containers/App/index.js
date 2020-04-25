// @flow

import React from 'react';
import Container from 'components/Container';
import Brand from 'components/Brand';
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
        <Brand className="mt-3 mb-2" />
        <Switch>
          <Route exact path="/">
            <CreateOrder />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}
