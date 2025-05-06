import './App.css';
import Header from './components/Header';
import Homepage from './components/Homepage';
import Weekly from './components/Weekly';
import Testimonials from './components/Testimonials';
import About from './components/About';

function App() {
  return (
    <>
      <div className="page-container">
        <Header />
      </div>

      <div className="full-width-green">
        <Homepage />
      </div>

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
  )
}

export default App;
