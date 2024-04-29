import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-wrapper">
        <div className="footer">
          {/* <img src="" alt="" className="footer-logo" /> */}
          <p className="footer-heading">Contact Us</p>
          <span className="footer-list">
           Chelsea,
            London, SW1X 7RN
          </span>
          <p className="footer-list">07 321 546 8764</p>
          <p className="footer-list">info@beautysalon.co.uk</p>
          <p className="footer-list">www.beautysalon.co.uk</p>
         
        </div>
        <div className="footer">
          <p className="footer-heading">Quick Links</p>
          <p className="footer-heading">Opening Hours</p>
          <p className="footer-list">Mon - Fri 9am-9pm</p>
          <p className="footer-list">Sat 8am -10pm</p>
          <p className="footer-list">Sun 9am- 9pm</p>
        </div>
        <div className="footer">
          <p className="footer-heading">Terms and Conditions</p>
          <p className="footer-list">Privacy Policy</p>
          <p className="footer-list">FAQs</p>
          <p className="footer-list">Cancel An Appointment</p>
      
        </div>
        <div className="footer-icons">
        <p className="footer-heading">Follow us</p>
          <FacebookIcon />
          <InstagramIcon />
          <XIcon />
          <YouTubeIcon />
        </div>
        <div className="footer">
          <p className="footer-heading">Quick Links</p>
          <p className="footer-list">About Us</p>
          <p className="footer-list">Services</p>
          <p className="footer-list">Gallery</p>
          <p className="footer-list">Contact Us</p>
        </div>
      </div>

      <p className="copyright">© 2024 Beauty Salon. All Rights Reserved</p>
    </footer>
  );
}

export default Footer;
