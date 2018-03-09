import React from 'react';
import { shallow } from 'enzyme';

import App from '../index';
import HomePage from '../../HomePage';

describe('<App/>', () => {
  it('should render HomePage', () => {
    const renderedComponent = shallow(<App />);
    expect(renderedComponent.find(HomePage).length).toBe(1);
  });
});
