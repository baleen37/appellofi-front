import React from 'react';
import { shallow, mount } from 'enzyme';
import { Route, MemoryRouter } from 'react-router-dom';

import App from '../index';
import HomePage from '../../HomePage';

describe('<App/>', () => {
  it('should render HomePage', () => {
    const wrapper = mount(<MemoryRouter initialEntries={['/']} initialIndex={0}>
      <App />
    </MemoryRouter>);
    expect(wrapper.find(HomePage).length).toBe(1);
  });

  it('should render some routes', () => {
    const component = shallow(<App />);
    expect(component.find(Route).length).not.toBe(0);
  });
});
