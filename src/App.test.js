import { render, screen } from '@testing-library/react';
import App from './App.jsx';
// If using Jest, 'test' is available globally. If not, import it as below:
 import { test, expect } from '@jest/globals';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});