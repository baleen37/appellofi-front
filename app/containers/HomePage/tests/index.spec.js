import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import HomePage from '../index';
import PlayerView from '../../../components/PlayerView';


describe('<HomePage>', () => {
  it('should render <PlayerView>', () => {
    const store = configureStore()();
    const wrapper = shallow(<HomePage store={store} />);
    console.log(wrapper.debug());
    expect(wrapper.find(PlayerView).length).toBe(1);
  });
});
