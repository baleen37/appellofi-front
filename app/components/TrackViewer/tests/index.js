import React from 'react';
import { TrackViewer } from '../index';

describe('<TrackViewer>', () => {
  it('should render', () => {
    expect(shallow(<TrackViewer />)).toMatchSnapshot();
  });
});
