import React from 'react';
import App from './App';
import render from './mocks/render';

test('renders component', () => {
  const { getByText } = render(<App />);

  expect(getByText(/Welcome to Chakra/i)).toBeInTheDocument();
});
