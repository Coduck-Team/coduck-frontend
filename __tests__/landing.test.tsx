import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

it('renders main page with the text "Get started by editing"', () => {
  render(<Home />);
  const text = screen.getByText(/Get started by editing/i);
  expect(text).toBeInTheDocument();
});
