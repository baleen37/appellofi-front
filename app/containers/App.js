import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import PlayerContainer from './PlayerContainer';

export class App extends React.Component {
  componentDidMount() {
  }

  render() {
    return (
      <Router>
        <Route exact path="/" component={PlayerContainer} />
      </Router>
    );
  }
}

export default connect()(App);
