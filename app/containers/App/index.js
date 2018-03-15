import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import PlayerContainer from '../PlayerContainer/index';
import DashboardContainer from '../DashboardContainer/index';

export class App extends React.Component {
  componentDidMount() {
  }

  render() {
    return (
      <Fragment>
        <Router>
          <Route exact path="/" component={DashboardContainer} />
        </Router>
        <PlayerContainer />
      </Fragment>
    );
  }
}

export default connect()(App);
