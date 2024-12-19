import './index.css';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom'; // Import Router components
import LoginPage from "./LoginPage";
import HomePage from './HomePage'; // Main homepage component
import ComposePage from './ComposePage'; // Page where "Let's Compose" redirects



function App() {
  return (
    <Router>
      <Routes>
        {/* Define the routes for different pages */}
        
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} /> 
        <Route path="/compose" element={<ComposePage />} />
      </Routes>
    </Router>
  );
}

export default App;
