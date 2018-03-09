import React from 'react';
import { shallow } from 'enzyme';

import HomePage from '../index';
import PlayerView from '../../../components/PlayerView';

describe('<HomePage>', () => {
  it('should render <PlayerView>', () => {
    const component = shallow(<HomePage />);
    expect(component.find(PlayerView).length).toBe(1);
  });
});
