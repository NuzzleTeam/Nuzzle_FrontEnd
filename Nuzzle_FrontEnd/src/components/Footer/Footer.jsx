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
      <div className="footer-item home">
        <Link to="/">
          <img className="footer-icon" src={homeIcon} alt="Home" />
          <p>홈</p>
        </Link>
      </div>

      <div className="footer-item">
        <Link to="/peek">
          <img className="footer-icon" src={peekIcon} alt="Peek" />
          <p>엿보기</p>
        </Link>
      </div>

      <div className="footer-item">
        <Link to="/piggybank">
          <img className="footer-icon" src={piggybankIcon} alt="PiggyBank" />
          <p>저금통</p>
        </Link>
      </div>

      <div className="footer-item">
        <Link to="/calendar">
          <img className="footer-icon" src={calendarIcon} alt="Calendar" />
          <p>달력</p>
        </Link>
      </div>

      <div className="footer-item">
        <Link to="/setting">
          <img className="footer-icon" src={settingIcon} alt="Setting" />
          <p>환경설정</p>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
