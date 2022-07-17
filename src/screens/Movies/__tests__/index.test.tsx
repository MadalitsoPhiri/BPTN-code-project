import {render, screen, waitFor} from '@testing-library/react-native';
import React from 'react';
import {Movies} from '..';
test('renders Movies component', async () => {
  render(<Movies />);
  // screen.getByText('All');
  await waitFor(() => {
    expect(screen.getByText('All')).toBeDefined();
  });
  //   expect(default_text).to('Movies');
});
