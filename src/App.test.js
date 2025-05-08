import { render, screen } from '@testing-library/react';
import App from './App';

// No need to use MemoryRouter, just render App directly
test('renders the BookingForm heading', async () => {
  render(<App />);  // No need for MemoryRouter here

  // Test that the BookingForm heading is rendered
  const heading = await screen.findByRole('heading', {
    name: /Make Your Reservation/i,
  });
  expect(heading).toBeInTheDocument();
});