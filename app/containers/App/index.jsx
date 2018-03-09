import React, { Fragment } from 'react';
import HomePage from '../HomePage';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <HomePage />
      </Fragment>
    );
  }
}

