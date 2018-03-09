import React from 'react';
import App from '../index';
import { shallow } from 'enzyme';
import PlayerView from '../../../components/PlayerView';

describe('<App/>', () => {
  it('should render PlayerView', () => {
    const renderedComponent = shallow(<App />);
    expect(renderedComponent.find(PlayerView).length).toBe(1);
  });
});
