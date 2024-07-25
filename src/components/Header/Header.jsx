import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import "./Header.css";

function Header() {
  let navigate = useNavigate();

  let goBack = () => {
    navigate(-1);
  };

  return (
    <header className="header">
      <div className="back">
        <FontAwesomeIcon
          icon={faAngleLeft}
          className="back-icon"
          onClick={goBack}
        />
      </div>
    </header>
  );
}

export default Header;
