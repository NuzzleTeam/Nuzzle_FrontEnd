import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./Header.css";

function Header({ extraClass }) {
  let navigate = useNavigate();

  let goBack = () => {
    navigate(-1);
  };

  return (
    <header className={`header ${extraClass}`}>
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

Header.propTypes = {
  extraClass: PropTypes.string,
};

export default Header;
