import {render, screen} from '@testing-library/react-native';
import React from 'react';
import {Movies} from '..';
test('renders Movies component', () => {
  render(<Movies />);
  screen.getByText('All');
  //   expect(default_text).to('Movies');
});
