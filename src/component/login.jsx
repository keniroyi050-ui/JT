import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleSubmit() {
    if (
      email == null ||
      password == null ||
      email.trim() == "" ||
      password.trim() == ""
    ) {
      alert("Enter a valid email or password");
      return;
    }
    if (password.length <= 7) {
      alert("Password must contain 8 characters");
      return;
    }

    navigate("/dashboard");
  }
  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Welcome Back</h1>

        <p className="login-subtitle">Login to your Job Tracker</p>

        <form onSubmit={handleSubmit}>
          <div className="login-group">
            <label>Email</label>
            <input
              value={email}
              type="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="login-group">
            <label>Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter your password"
              value={password}
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
