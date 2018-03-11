import React from 'react';
import { shallow } from 'enzyme';
import PlayerView from '../index';

describe('<PlayerView>', () => {
  it('should render the header', () => {
    const renderedComponent = shallow(<PlayerView />);
    expect(renderedComponent.find('img').length).toBe(1);
  });
});
