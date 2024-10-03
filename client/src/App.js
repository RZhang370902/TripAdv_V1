import './App.css';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import GenerateTrip from './pages/GenerateTrip';


function App() {


  return (
    <div className="App">
      <Router>
        <Link to="/">Home</Link>
        <Link to="/generateTrip">Generate A Trip</Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/generateTrip" element={<GenerateTrip />} />
          
        </Routes>
      </Router>


    </div>
  );
}

export default App;
