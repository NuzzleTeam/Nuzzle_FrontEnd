import { Link } from "react-router-dom";
import homeIcon from "../../assets/home.png";
import peekIcon from "../../assets/peek.png";
import piggybankIcon from "../../assets/piggybank.png";
import calendarIcon from "../../assets/calendar.png";
import settingIcon from "../../assets/setting.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-item">
        <Link to="/">
          <img className="footer-icon" src={homeIcon} alt="Home" />
        </Link>
      </div>

      <div className="footer-item">
        <Link to="/peek">
          <img className="footer-icon" src={peekIcon} alt="Peek" />
        </Link>
      </div>

      <div className="footer-item">
        <Link to="/piggybank">
          <img className="footer-icon" src={piggybankIcon} alt="PiggyBank" />
        </Link>
      </div>

      <div className="footer-item">
        <Link to="/calendar">
          <img className="footer-icon" src={calendarIcon} alt="Calendar" />
        </Link>
      </div>

      <div className="footer-item">
        <Link to="/setting">
          <img className="footer-icon" src={settingIcon} alt="Setting" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;