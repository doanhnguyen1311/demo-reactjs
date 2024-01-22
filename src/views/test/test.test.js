import { render, screen } from '@testing-library/react';
import test from './test';

test('renders learn react link', () => {
  render(<test />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
