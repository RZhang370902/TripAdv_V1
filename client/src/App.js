import './App.css';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import GenerateTrip from './pages/GenerateTrip';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/">Home</Link>
        <Link to="/generateTrip">Generate A Trip</Link>
        <Link to="/login">Login</Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/generateTrip" element={<GenerateTrip />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
