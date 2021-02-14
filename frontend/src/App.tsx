import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter'; // -> Going to leave this as an example for now

// Import componenets here, routing will also be done here
function App() {
  return (
    <Router>
      <Navbar />
    </Router>
  );
}

export default App;
