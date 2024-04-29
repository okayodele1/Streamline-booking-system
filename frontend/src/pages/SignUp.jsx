import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import "./SignUp.css"; 

function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async () => {
  
    if (!username || !email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8800/api/auth/register", {
        username,
        email,
        password,
      });
      console.log("Registration successful:", response.data);
      alert("Registration successful");
    } catch (error) {
      console.error("Error registering:", error);
      alert("Failed to register. Please try again later.");
    }
  };

  return (
    <div className="sign-up-container">
      <h3 className="modal-header">Register</h3>
      <TextField
        style={{ marginBottom: 20, width: 400 }}
        fullWidth
        label="Name"
        variant="outlined"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        style={{ marginBottom: 20, width: 400 }}
        fullWidth
        label="Email"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
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
      <Button className="register-button" onClick={handleRegister} variant="contained">
        Register
      </Button>
    </div>
  );
}

export default SignUp;
