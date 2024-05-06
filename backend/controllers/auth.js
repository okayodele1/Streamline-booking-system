import { db } from "../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"; 

export const register = (req, res) => {
  // Check if user exists
  const q = "SELECT * FROM user WHERE email = ? OR username = ?";
  db.query(q, [req.body.email, req.body.username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length) return res.status(409).json("User already exists!");

    // Create new user
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = {
      username: req.body.username,
      email: req.body.email,
      password: hash,
    };

    // Insert user into database
    const insertQuery = "INSERT INTO user SET ?";
    db.query(insertQuery, newUser, (err, result) => {
      if (err) return res.status(500).json(err);

      // Generate JWT token
      const token = jwt.sign({ username: newUser.username }, "secret_key", {
        expiresIn: "1h", 
      });

      // Return token to frontend
      return res.status(200).json({ token });
    });
  });
};


export const login = (req, res) => {
  const { username, password } = req.body;

  const q = "SELECT * FROM user WHERE username = ?";

  db.query(q, [username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(404).json("User not found!");

    const isPasswordCorrect = bcrypt.compareSync(password, data[0].password);

    if (!isPasswordCorrect)
      return res.status(400).json("Wrong username or password!");

 
    const token = jwt.sign({ username: data[0].username }, "secret_key", {
      expiresIn: "1h", 
    });

    return res.status(200).json({ token }); 
  });
};

export const logout = (req, res) => {
  return res.status(200).json("User has been logged out.");
};
// Middleware to verify JWT token
export const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) return res.status(401).json("Access denied!");

  jwt.verify(token, "secret_key", (err, decoded) => {
    if (err) return res.status(403).json("Invalid token!");

    req.username = decoded.username; 
    next();
  });
};
