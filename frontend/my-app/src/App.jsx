import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar"; // Import the Navbar component

import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import Home from "./pages/Home.jsx";
import "./styles/App.css";

function App() {
  return (
    <Router>
      <Navbar />{/* Render the Navbar component */}
      <div className="content-container">
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} /> {/* New Route */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
