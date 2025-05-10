import { render, screen } from '@testing-library/react';
import App from './App';

// No need to use MemoryRouter, just render App directly
test('renders the BookingForm heading', async () => {
  render(<App />);  // No need for MemoryRouter here

  // Test that the BookingForm heading is rendered
  const heading = await screen.findByText(/Start free trial/i);
  expect(heading).toBeInTheDocument();
});