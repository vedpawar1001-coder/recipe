// Login.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Auth.css";

function Login() {
  return (
    <div className="auth-page"> {/* Add auth-page class */}
        <div className="auth-container">
            <h2>Login</h2>
            <form>
            <input type="email" placeholder="Enter Email" required />
            <input type="password" placeholder="Enter Password" required />
            <button type="submit">Login</button>
            </form>
            <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
            <p>
                <Link to="/forgot-password" className="forgot-password">
                  Forgot Password?
                </Link>
            </p>
        </div>
    </div>
  );
}

export default Login;
