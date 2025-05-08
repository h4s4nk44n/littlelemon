import React, { useState, useEffect } from 'react';
import "../App.css";  
import { useNavigate } from 'react-router-dom';

function BookingForm({ availableTimes, updateTimes }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);  
  const [occasion, setOccasion] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [availableDates, setAvailableDates] = useState([]); // Store available dates

  const navigate = useNavigate();

  // Generate available dates (next 7 days)
  useEffect(() => {
    const generateAvailableDates = () => {
      let dates = [];
      const today = new Date();
      for (let i = 0; i < 7; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() + i);
        const formattedDate = date.toISOString().split('T')[0]; 
        dates.push(formattedDate);
      }
      setAvailableDates(dates);
    };
    generateAvailableDates();
  }, []);

  const handleDateChange = (e) => {
    setDate(e.target.value);
    updateTimes(e.target.value); // Update available times based on date
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleGuestsChange = (e) => {
    setGuests(e.target.value);
  };

  const handleOccasionChange = (e) => {
    setOccasion(e.target.value);
  };

  const handleSpecialRequestsChange = (e) => {
    setSpecialRequests(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., log form data or send to an API)
    console.log({
      date,
      time,
      guests,
      occasion,
      specialRequests,
    });

    // Redirect to home after form submission
    navigate('/');
  };

  return (
    <div className="booking-form-container">
      <h1 className="form-header">Make Your Reservation</h1>

      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="res-date">Choose date</label>
          <input
            type="date"
            id="res-date"
            value={date}
            onChange={handleDateChange}
            min={availableDates[0]} // Min date (earliest available)
            max={availableDates[availableDates.length - 1]} // Max date (latest available)
          />
        </div>

        <div className="form-group">
          <label htmlFor="res-time">Choose time</label>
          <select id="res-time" value={time} onChange={handleTimeChange}>
            {availableTimes.map((timeOption) => (
              <option key={timeOption} value={timeOption}>
                {timeOption}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="guests">Number of guests</label>
          <input
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            value={guests}
            onChange={handleGuestsChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            value={occasion}
            onChange={handleOccasionChange}
          >
            <option value="">Select Occasion</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Engagement</option>
            <option value="Anniversary">Anniversary</option>
            <option value="Other">Gender Reveal</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="special-requests">Special Requests (Optional)</label>
          <textarea
            id="special-requests"
            value={specialRequests}
            onChange={handleSpecialRequestsChange}
            placeholder="Any special requests for your reservation?"
          ></textarea>
        </div>

        <div className="form-group">
          <input
            type="submit"
            value="Make Your Reservation"
            className="submit-btn"
          />
        </div>
      </form>
    </div>
  );
}

export default BookingForm;
