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
          <div>홈</div>
        </Link>
      </div>

      <div className="footer-item">
        <Link to="/peek">
          <img className="footer-icon" src={peekIcon} alt="Peek" />
          <div>엿보기</div>
        </Link>
      </div>

      <div className="footer-item">
        <Link to="/piggybank">
          <img className="footer-icon" src={piggybankIcon} alt="PiggyBank" />
          <div>저금통</div>
        </Link>
      </div>

      <div className="footer-item">
        <Link to="/calendar">
          <img className="footer-icon" src={calendarIcon} alt="Calendar" />
          <div>달력</div>
        </Link>
      </div>

      <div className="footer-item">
        <Link to="/setting">
          <img className="footer-icon" src={settingIcon} alt="Setting" />
          <div>환경설정</div>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;