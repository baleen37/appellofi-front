import React from 'react';
import { Dashboard } from '../index';

describe('<Dashboard>', () => {
  it('should render', () => {
    expect(shallow(<Dashboard />)).toMatchSnapshot();
  });
});
