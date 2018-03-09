import React from 'react';
import { shallow } from 'enzyme';

import HomePage from '../index';
import PlayerView from '../../../components/PlayerView';

describe('<HomePage>', () => {
  it('should render <PlayerView>', () => {
    const wrapper = shallow(<HomePage />);
    expect(wrapper.find(PlayerView).length).toBe(1);
  });
});
