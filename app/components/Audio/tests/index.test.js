import React from 'react';
import { audio } from '../index';

describe('<audio/>', () => {
  it('should render', () => {
    expect(shallow(<audio />)).toMatchSnapshot();
  });
});
