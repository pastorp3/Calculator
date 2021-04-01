import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

import Qoute from '../Qoute/Qoute';

it('renders correctly', () => {
  const tree = renderer.create(<BrowserRouter><Qoute /></BrowserRouter>).toJSON();
  expect(tree).toMatchSnapshot();
});
