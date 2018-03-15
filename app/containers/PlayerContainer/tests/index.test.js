import React from 'react';

import { PlayerContainer } from '../index';
import Player from '../../../components/Player';

describe('<PlayerContainer />', () => {
  it('should render', () => {
    const wrapper = shallow(<PlayerContainer />);
    expect(wrapper).toMatchSnapshot();
  });
  
  it('should render the <Player>', () => {
    const wrapper = shallow(<PlayerContainer />);
    expect(wrapper.find(Player).length).toBe(0);
  });

  it('should render the <Player> when exists tracks', () => {
    const props = {
      track: {},
    };
    const wrapper = shallow(<PlayerContainer {...props} />);
    expect(wrapper.find(Player).length).toBe(1);
  });
});
