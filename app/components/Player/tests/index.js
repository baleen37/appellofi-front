import React from 'react';
import { Player } from '../index';

describe('<Player>', () => {
  it('should render', () => {
    expect(shallow(<Player />)).toMatchSnapshot();
  });
});
