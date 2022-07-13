import {render, screen, fireEvent} from '@testing-library/react-native';
import React from 'react';
import {Liked} from '..';
test('renders Movies component', () => {
  render(<Liked />);
  screen.getByText('Liked');
  //   expect(default_text).to('Movies');
});
