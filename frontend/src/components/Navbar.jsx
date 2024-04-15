/* eslint-disable no-undef */
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assets/salon.png"; 
import { Link } from "react-router-dom";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import TextField from "@mui/material/TextField";
import './Navbar.css';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  height: 600,
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #FF1260",
  boxShadow: 24,
  p: 9,
  '@media (max-width: 768px)': {
   height:500,
   width:270
  },
};

export default function NewNavbar() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [open, setOpen] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <nav className="new-navbar">
      <div className="new-container">
        <img
          src={logo}
          className="new-logo"
          alt=""
        />
        <div className="new-menu-icon" onClick={handleShowNavbar}>
          <MenuIcon />
        </div>
        <div className={`new-nav-elements ${showNavbar && "active"}`}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/faqs">Faqs</Link>
            </li>
            <li>
              <Link to="/login">Log in</Link>
            </li>
            <li>
              <button onClick={handleOpen}>Appointments</button>
            </li>
          </ul>
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <HighlightOffIcon onClick={handleClose} className="signup-close"/>
            <h3 className="modal-header">Book an Appointment</h3>
            <p className="modal-sub-header">Fill in the details below to schedule your appointment:</p>
            <div className="top-bar-input">
              <TextField fullWidth label="Full Name" variant="outlined" />
            </div>
            <div className="top-bar-input">
              <TextField fullWidth label="Email" variant="outlined" />
            </div>
            <div className="top-bar-input">
              <TextField fullWidth label="Phone Number" variant="outlined" />
            </div>
            <div className="top-bar-input">
              <TextField fullWidth label="" variant="outlined" type="date" />
            </div>
            <div className="top-bar-input">
              <TextField fullWidth label="" variant="outlined" type="time" />
            </div>
            <button className="modal-button" onClick={handleClose}>Book Appointment</button>
          </Box>
        </Modal>
      </div>
    </nav>
  );
}
