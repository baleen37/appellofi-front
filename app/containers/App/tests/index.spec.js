import React from 'react';
import { shallow } from 'enzyme';
import { Route } from 'react-router-dom';
import configureStore from 'redux-mock-store';

import App from '../index';
import HomePage from '../../HomePage';

describe('<App/>', () => {
  it('should render HomePage', () => {
    const store = configureStore()();
    const wrapper = shallow(<App store={store} />);
    expect(wrapper.find(HomePage).length).toBe(1);
  });

  it('should render some routes', () => {
    const component = shallow(<App />);
    expect(component.find(Route).length).not.toBe(0);
  });
});
