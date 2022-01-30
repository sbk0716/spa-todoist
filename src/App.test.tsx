import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './components/App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/TODO進捗管理/i);
  expect(linkElement).toBeInTheDocument();
});
