import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import HomePage from '../HomePage';
import Player from '../../api/soundcloud';

export class App extends React.Component {
  componentDidMount() {
  }

  render() {
    return (
      <Router>
        <Route exact path="/" component={HomePage} />
      </Router>
    );
  }
}

export default connect()(App);
