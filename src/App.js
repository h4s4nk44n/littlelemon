import './App.css';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import React, { useReducer, useEffect } from 'react';
import Header from './components/Header';
import Homepage from './components/Homepage';
import Weekly from './components/Weekly';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Footer from './components/Footer';
import BookingForm from './components/BookingForm';
import ConfirmedBooking from './components/ConfirmedBooking';
import { fetchAPI, submitAPI } from './api';

export const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today);
};

export const availableTimesReducer = (state, action) => {
  switch (action.type) {
    case 'SET_TIMES':
      return action.payload;
    default:
      return state;
  }
};

// ✅ This component can safely use useNavigate
function MainContent() {
const [availableTimes, dispatch] = useReducer(availableTimesReducer, []);
  const navigate = useNavigate();

  useEffect(() => {
    const today = new Date();
    const result = fetchAPI(today);
    dispatch({ type: 'SET_TIMES', payload: result });
  }, []);

  const updateTimes = (selectedDate) => {
    const result = fetchAPI(new Date(selectedDate));
    dispatch({ type: 'SET_TIMES', payload: result });
  };

  const submitForm = (formData) => {
    if (submitAPI(formData)) {
      navigate('/confirmed');
    }
  };

  return (
    <>
      <header role="banner" className="page-container">
        <Header />
      </header>

      <div className="full-width-green">
        <Routes>
          <Route
            path="/"
            element={
              <>

                <main>
                  <Homepage />
                </main>
                <div className="weekly-specials">
                  <Weekly />
                </div>

                <Testimonials />

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
                submitForm={submitForm}
              />
            }
          />
          <Route
            path="/confirmed"
            element={<ConfirmedBooking />}
          />
        </Routes>
      </div>

      <div className="footer-block" role="contentinfo">
        <Footer />
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <MainContent />
    </Router>
  );
}

export default App;
