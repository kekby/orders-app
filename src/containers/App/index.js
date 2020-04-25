// @flow

import React from 'react';
import Container from 'components/Container';
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
            here i am
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}
