import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

it('renders 6 change logs', () => {
  render(<Home />);
  // Finds all p tags with date logs
  const numListItems = screen.getByTestId('changelog').querySelectorAll('p').length;
  expect(numListItems).toBe(6);
});
