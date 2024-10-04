import React from "react";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  height: 6vh;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  background-color: #fcfdf5;
  color: #fcfdf5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1px 20px;
  z-index: 100;

  &.custom-header-bg {
    background-color: #f3f3f3;
  }
`;

const BackIcon = styled(FontAwesomeIcon)`
  font-size: 20px;
  margin-right: 5px;
  color: rgba(0, 0, 0, 1);

  &:active {
    color: black;
    transform: scale(1.1);
  }
`;

function Header({ extraClass }) {
  let navigate = useNavigate();

  let goBack = () => {
    navigate(-1);
  };

  return (
    <HeaderWrapper className={extraClass}>
      <div className="back">
        <BackIcon icon={faAngleLeft} onClick={goBack} />
      </div>
    </HeaderWrapper>
  );
}

Header.propTypes = {
  extraClass: PropTypes.string,
};

export default Header;
