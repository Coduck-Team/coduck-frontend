import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

it('renders main page with the text "Get started by editing"', () => {
  render(<Home />);
  const login = screen.getAllByText(/\bLogin\b/i).length;
  expect(login).toBe(2);

  const register = screen.getAllByText(/\bRegister\b/i).length;
  expect(register).toBe(2);
});
