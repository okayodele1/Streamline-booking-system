/* eslint-disable no-undef */
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assets/salon.png"; 
import { Link } from "react-router-dom";

import './Navbar.css';

export default function NewNavbar() {
  const [showNavbar, setShowNavbar] = useState(false);
  

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const handleOpen = () => setOpen(true);
  

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
    

      </div>
    </nav>
  );
}
