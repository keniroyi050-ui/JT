import React from "react";
const Login = () => {
  return (
    <div className="login-container">
      <div className="login-card">

        <h1>Welcome Back</h1>

        <p className="login-subtitle">
          Login to your Job Tracker
        </p>

        <form>
          <div className="login-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="login-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
            />
          </div>

          <button className="login-button" type="submit">
            Login
          </button>
        </form>

        <p className="signup-text">
          Don't have an account? <span>Sign up</span>
        </p>

      </div>
    </div>
  );
};

export default Login;