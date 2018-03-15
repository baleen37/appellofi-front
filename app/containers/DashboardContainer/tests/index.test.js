import React from 'react';
import { DashboardContainer } from '../index';

describe('<DashboardContainer />', () => {
  it('should render', () => {
    const wrapper = shallow(<DashboardContainer />);
    expect(wrapper).toMatchSnapshot();
  });
});
