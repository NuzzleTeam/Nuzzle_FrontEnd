import { Link, useLocation } from "react-router-dom";
import homeIcon from "../../assets/home.png";
import peekIcon from "../../assets/peek.png";
import activePeekIcon from "../../assets/activepeek.png"; // 활성화된 상태에서 사용할 아이콘
import piggybankIcon from "../../assets/piggybank.png";
import calendarIcon from "../../assets/calendar.png";
import settingIcon from "../../assets/setting.png";
import "./Footer.css";

const Footer = () => {
  const location = useLocation();

  return (
    <footer className="footer">
      <div
        className={`footer-item ${location.pathname === "/" ? "active" : ""}`}
      >
        <Link to="/">
          <img className="footer-icon" src={homeIcon} alt="Home" />
          <p>홈</p>
        </Link>
      </div>

      <div className={`footer-item ${location.pathname === "/peek" ? "" : ""}`}>
        <Link to="/peek">
          {/* 경로가 /peek일 때 activePeekIcon을 사용 */}
          <img
            className="footer-icon"
            src={location.pathname === "/peek" ? activePeekIcon : peekIcon}
            alt="Peek"
          />
          <p>엿보기</p>
        </Link>
      </div>

      <div
        className={`footer-item ${
          location.pathname === "/piggybank" ? "active" : ""
        }`}
      >
        <Link to="/piggybank">
          <img className="footer-icon" src={piggybankIcon} alt="PiggyBank" />
          <p>저금통</p>
        </Link>
      </div>

      <div
        className={`footer-item ${
          location.pathname === "/calendar" ? "active" : ""
        }`}
      >
        <Link to="/calendar">
          <img className="footer-icon" src={calendarIcon} alt="Calendar" />
          <p>달력</p>
        </Link>
      </div>

      <div
        className={`footer-item ${
          location.pathname === "/setting" ? "active" : ""
        }`}
      >
        <Link to="/setting">
          <img className="footer-icon" src={settingIcon} alt="Setting" />
          <p>환경설정</p>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
