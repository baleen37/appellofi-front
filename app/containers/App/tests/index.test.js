import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { App } from '../index';
import PlayerContainer from '../../PlayerContainer';

describe('<App />', () => {
  it('should render', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render the Router ', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Router).length).toBe(1);
  });

  it('should render the <PlayerContainer />', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(PlayerContainer).length).toBe(1);
  });
});
