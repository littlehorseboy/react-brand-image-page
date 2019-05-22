import React from 'react';
import { shallow } from 'enzyme';
import { Footer } from './Footer.jsx';

test('shallow Footer expect textContent', () => {
  const footer = shallow(<Footer classes={{}} />);

  expect(footer.text()).toEqual('Copyright © 2019 Horse. All rights reserved.');
});
