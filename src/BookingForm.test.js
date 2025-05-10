import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './components/BookingForm';
import { MemoryRouter } from 'react-router-dom';

describe('BookingForm Component', () => {
  const fakeUpdateTimes = jest.fn();
  const fakeSubmitForm = jest.fn();
  const fakeAvailableTimes = ["17:00", "18:00", "19:00"];

  beforeEach(() => {
    render(
      <MemoryRouter>
        <BookingForm
          availableTimes={fakeAvailableTimes}
          updateTimes={fakeUpdateTimes}
          submitForm={fakeSubmitForm}
        />
      </MemoryRouter>
    );
  });

  test('renders all form fields', () => {
    expect(screen.getByLabelText(/Choose date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Choose time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Occasion/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Special Requests/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Make Your Reservation/i })).toBeInTheDocument();
  });

  test('submit button should be disabled initially', () => {
    const submitButton = screen.getByRole('button', { name: /Make Your Reservation/i });
    expect(submitButton).toBeDisabled();
  });

  test('form does not submit when fields are incomplete', () => {
    const submitButton = screen.getByRole('button', { name: /Make Your Reservation/i });

    fireEvent.click(submitButton);

    expect(fakeSubmitForm).not.toHaveBeenCalled();
  });

  test('form submits correctly when fields are valid', async () => {
    const dateInput = screen.getByLabelText(/Choose date/i);
    const timeSelect = screen.getByLabelText(/Choose time/i);
    const guestsInput = screen.getByLabelText(/Number of guests/i);
    const occasionSelect = screen.getByLabelText(/Occasion/i);
    const submitButton = screen.getByRole('button', { name: /Make Your Reservation/i });

    // Fill the form
    fireEvent.change(dateInput, { target: { value: new Date().toISOString().split('T')[0] } }); // today's date
    fireEvent.change(timeSelect, { target: { value: "17:00" } });
    fireEvent.change(guestsInput, { target: { value: "2" } });
    fireEvent.change(occasionSelect, { target: { value: "Birthday" } });

    // Button should now be enabled
    expect(submitButton).toBeEnabled();

    // Submit the form
    fireEvent.click(submitButton);

    expect(fakeSubmitForm).toHaveBeenCalledTimes(1);
  });
});