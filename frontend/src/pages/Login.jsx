/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import "./Login.css"; 

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!username || !password) {
      setError("Please enter your username and password.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8800/api/auth/login", {
        username,
        password,
      });
      alert("Login Successful");
      navigate("/");
      console.log("Login successful:", response.data);
    } catch (error) {
      console.error("Error logging in:", error);
      alert("Failed to login. Please check your credentials.");
    }
  };

  return (
    <div className="login-container">
      <h3 className="modal-header">Login</h3>
      <TextField
        style={{ marginBottom: 20, width: 400 }}
        fullWidth
        label="Username"
        variant="outlined"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        style={{ marginBottom: 20, width: 400 }}
        fullWidth
        label="Password"
        variant="outlined"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <Button className="login-button" onClick={handleLogin} variant="contained">
        Login
      </Button>
      <div className="register-link">
        <p>Don't have an account? <Link to="/signup">Register here</Link></p>
      </div>
    </div>
  );
}

export default Login;
