import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useReducer } from 'react';
import Header from './components/Header';
import Homepage from './components/Homepage';
import Weekly from './components/Weekly';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Footer from './components/Footer';
import BookingForm from './components/BookingForm'; 

export const availableTimesReducer = (state = [
  '17:00',
  '18:00',
  '19:00',
  '20:00',
  '21:00',
  '22:00',
], action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return state; // For now, return the same available times
    case 'INITIALIZE_TIMES':
      return [
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00',
      ]; // Set initial available times when this action is dispatched
    default:
      return state;
  }
};
function App() {
  const [availableTimes, dispatch] = useReducer(availableTimesReducer, [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
  ]);

  const updateTimes = (selectedDate) => {
    dispatch({ type: 'UPDATE_TIMES', selectedDate });
  };

  return (
    <Router>
      <div className="page-container">
        <Header />
      </div>

      <div className="full-width-green">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Homepage />
                <div className="weekly-specials">
                  <Weekly />
                </div>
                <div className="testimonial-block">
                  <Testimonials />
                </div>
                <div className="about-block">
                  <About />
                </div>
              </>
            }
          />
          <Route
            path="/book-table"
            element={
              <BookingForm
                availableTimes={availableTimes}
                updateTimes={updateTimes}
              />
            }
          />
        </Routes>
      </div>

      <div className="footer-block">
        <Footer />
      </div>
    </Router>
  );
}

export default App;
