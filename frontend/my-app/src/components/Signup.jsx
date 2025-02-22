//Signup.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Auth.css"; // Ensure this path is correct

function Signup() {
  return (
    <div className="auth-page"> {/* Add auth-page class */}
      <div className="auth-container">
        <h2>Sign Up</h2>
        <form>
          <input type="text" placeholder="Enter Name" required />
          <input type="email" placeholder="Enter Email" required />
          <input type="password" placeholder="Enter Password" required />
          <button type="submit">Sign Up</button>
        </form>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
