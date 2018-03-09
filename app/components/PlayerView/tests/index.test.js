import React from 'react';
import PlayerView from '../index';
import { shallow } from 'enzyme';

describe('<PlayerView>', () => {
  it('should render the header', () => {
    const renderedComponent = shallow(<PlayerView />);
    expect(renderedComponent.find('img').length).toBe(1);
  });
});
