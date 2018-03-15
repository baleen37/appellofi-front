import React from 'react';
import { shallow } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';

import App from '../index';

describe('<App />', () => {
  it('should render the Router ', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Router).length).toBe(1);
  });
});
