import { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assets/salon.png";
import { Link, useNavigate } from "react-router-dom";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import "./Navbar.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


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
  "@media (max-width: 768px)": {
    height: 500,
    width: 270,
  },
};

export default function NewNavbar() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [serviceName, setServiceName] = useState("");
  const [stylist, setStylist] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [showNavbar, setShowNavbar] = useState(false);
  const [open, setOpen] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [appointmentId, setAppointmentId] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate("/");
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  const handleOpen = () => {
    if (isLoggedIn) {
      setOpen(true);
    } else {
      navigate("/login");
    }
  };
  const handleClose = () => {
    setOpen(false);
    setBookingSuccess(false);
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };
  const bookAppointment = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "http://localhost:8800/api/appointment/book",
        {
          name: fullName,
          email: email,
          phone: phoneNumber,
          appointment_time: appointmentTime,
          appointment_date: appointmentDate,
          serviceName: serviceName,
          stylist: stylist,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setAppointmentId(response.data.appointmentId);
      // setResponseMessage(response.data.message);
      setBookingSuccess(true);
      toast.success("Appointment booked successfully!");
    } catch (error) {
      console.error("Error booking appointment:", error);
      toast.error("Failed to book appointment. Please try again later.");
    }
  };
  

  const cancelAppointment = async (appointmentId) => {
    try {
      const response = await axios.delete(
        `http://localhost:8800/api/appointment/cancel/${appointmentId}`
      );
      setBookingSuccess(false);
      setOpen(false);
      toast.success("Appointment cancelled successfully!");
    } catch (error) {
      console.error("Error cancelling appointment:", error);
      toast.error("Failed to cancel appointment. Please try again later.");
    }
  };
  

  return (
    <nav className="new-navbar">
  <ToastContainer />
      <div className="new-container">
        <Link to="/">
          <img src={logo} className="new-logo" alt="" />
        </Link>
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
              {isLoggedIn ? (
                <div>
                  <span style={{ marginRight: 30 }} onClick={handleLogout}>
                    Logout
                  </span>
                  <span>Welcome!</span>
                </div>
              ) : (
                <Link to="/login">Log in</Link>
              )}
            </li>

            <li>
              <button onClick={handleOpen}>Book an Appointment</button>
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
            <HighlightOffIcon onClick={handleClose} className="signup-close" />
            {!bookingSuccess ? (
              <div>
                <h3 className="modal-header">Book an Appointment</h3>
                <p className="modal-sub-header">
                  Fill in the details below to schedule your appointment:
                </p>
                <TextField
                  fullWidth
                  style={{ marginBottom: 10, width: 400 }}
                  label="Full Name"
                  variant="outlined"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
                <TextField
                  fullWidth
                  style={{ marginBottom: 10, width: 400 }}
                  label="Email"
                  variant="outlined"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <TextField
                  fullWidth
                  style={{ marginBottom: 10, width: 400 }}
                  label="Phone Number"
                  variant="outlined"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />

                <Select
                  fullWidth
                  value={serviceName}
                  onChange={(e) => setServiceName(e.target.value)}
                  style={{ marginBottom: 10, width: 400 }}
                  displayEmpty
                  inputProps={{ "aria-label": "Select Service" }}
                >
                  <MenuItem value="" disabled>
                    Select Service
                  </MenuItem>
                  <MenuItem value="Barbing">Barbing £50</MenuItem>
                  <MenuItem value="Polishing">Polishing £50</MenuItem>
                  <MenuItem value="Extension">Extensions £30</MenuItem>
                  <MenuItem value="Dreadlock">Dreadlock £50</MenuItem>
                  <MenuItem value="Braids">Braid £50</MenuItem>
                  <MenuItem value="Cornroll">Cornroll £30</MenuItem>
                  <MenuItem value="Knotless braids">Knotless braids £30</MenuItem>
                  <MenuItem value="Hair twist">Hair twist £50</MenuItem>
                  <MenuItem value="Fixing">Fixing £50</MenuItem>
                  <MenuItem value="Hair Wash">Hair Wash £40</MenuItem>
                  <MenuItem value="Hair treatment">Hair treatment £50</MenuItem>
                  <MenuItem value="Frontal Installation">Frontal Installation £60</MenuItem>
                </Select>
                <Select
                  fullWidth
                  value={stylist}
                  onChange={(e) => setStylist(e.target.value)}
                  style={{ marginBottom: 10, width: 400 }}
                  displayEmpty
                  inputProps={{ "aria-label": "Select Stylist" }}
                >
                  <MenuItem value="" disabled>
                    Select Stylist
                  </MenuItem>
                  <MenuItem value="Sharon">Sharon</MenuItem>
                  <MenuItem value="Jay">Jay</MenuItem>
                  <MenuItem value="Judy">Judy</MenuItem>
                  <MenuItem value="Brad">Brad</MenuItem>
                  <MenuItem value="Deo">Deo</MenuItem>
                  <MenuItem value="Banks">Banks</MenuItem>
                </Select>

                <TextField
                  fullWidth
                  style={{ marginBottom: 10, width: 400 }}
                  label=""
                  variant="outlined"
                  type="date"
                  value={appointmentDate}
                  onChange={(e) => setAppointmentDate(e.target.value)}
                />

                  <input 
                   value={appointmentTime}
                   onChange={(e) => setAppointmentTime(e.target.value)}
                  style={{ marginBottom: 10, width: 395, height:50,backgroundColor:'white',
                  fontSize:20,color:'black',fontWeight:400,
                borderWidth:1
                }}
                  aria-label="Time" type="time" />


                <button className="modal-button" onClick={bookAppointment}>
                  Book Appointment
                </button>
              </div>
            ) : (
              <div>
                <h3 className="modal-header">Booking Successful!</h3>
                <p className="modal-sub-header">Your appointment details:</p>
                <p>Full Name: {fullName}</p>
                <p>Email: {email}</p>
                <p>Phone Number: {phoneNumber}</p>
                <p>Service: {serviceName}</p>
                <p>Stylist: {stylist}</p>
                <p>Date: {appointmentDate}</p>
                <p>Time: {appointmentTime}</p>
                <button
                  className="modal-button"
                  onClick={() => cancelAppointment(appointmentId)}
                >
                  Cancel Appointment
                </button>
              </div>
            )}
          </Box>
        </Modal>
      </div>
    </nav>
  );
}
