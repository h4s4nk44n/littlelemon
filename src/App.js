import './App.css';
import Header from './components/Header';
import Homepage from './components/Homepage';
import Weekly from './components/Weekly';
function App() {
  return (
    <>
      <div className="page-container">
        <Header />
      </div>

      <div className="full-width-green">
        <Homepage />
      </div>

      <div className="page-container weekly-specials">
        <Weekly />
      </div>
    </>
  )
}

export default App;
