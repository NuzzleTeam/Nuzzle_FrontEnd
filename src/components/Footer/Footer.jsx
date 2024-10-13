import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import homeIcon from "../../assets/home.png";
import peekIcon from "../../assets/peek.png";
import activePeekIcon from "../../assets/activepeek.png"; // 활성화된 상태에서 사용할 아이콘
import piggybankIcon from "../../assets/piggybank.png";
import calendarIcon from "../../assets/calendar.png";
import settingIcon from "../../assets/setting.png";

const FooterWrapper = styled.footer`
  min-height: 6vh;
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fcfdf5;
  color: #fcfdf5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1px 20px;
  z-index: 100;
`;

const FooterItem = styled.div`
  text-align: center;
  font-size: 14px;
  padding: 5px 10px;

  p {
    padding: 0;
    margin: 0;
  }

  img {
    margin-bottom: 0%;
  }

  a {
    text-decoration: none;
    color: black;
    display: block;
    text-align: center;
    font-weight: 500;

    &:hover {
      color: #ff87b7;
      transform: scale(1.1);
      transition: transform 0.2s ease-in-out;
    }
  }

  &.active a {
    color: #ff87b7;
  }

  &.active img {
    filter: brightness(0) saturate(100%) invert(64%) sepia(40%) saturate(5084%)
      hue-rotate(297deg) brightness(97%) contrast(91%);
  }

  &:nth-child(2).active a {
    color: black;
  }

  &:nth-child(2).active img {
    filter: none;
  }
`;

const FooterIcon = styled.img`
  display: block;
  margin: 0 auto 5px;
  width: 35px;
  height: 35px;
`;

const Footer = () => {
  const location = useLocation();

  return (
    <FooterWrapper>
      <FooterItem className={location.pathname === "/" ? "active" : ""}>
        <Link to="/">
          <FooterIcon src={homeIcon} alt="Home" />
          <p>홈</p>
        </Link>
      </FooterItem>

      <FooterItem className={location.pathname === "/peek" ? "" : ""}>
        <Link to="/peek">
          <FooterIcon
            src={location.pathname === "/peek" ? activePeekIcon : peekIcon}
            alt="Peek"
          />
          <p>엿보기</p>
        </Link>
      </FooterItem>

      <FooterItem
        className={location.pathname === "/piggybank" ? "active" : ""}
      >
        <Link to="/piggybank">
          <FooterIcon src={piggybankIcon} alt="PiggyBank" />
          <p>저금통</p>
        </Link>
      </FooterItem>

      <FooterItem className={location.pathname === "/calendar" ? "active" : ""}>
        <Link to="/calendar">
          <FooterIcon src={calendarIcon} alt="Calendar" />
          <p>달력</p>
        </Link>
      </FooterItem>

      <FooterItem className={location.pathname === "/setting" ? "active" : ""}>
        <Link to="/setting">
          <FooterIcon src={settingIcon} alt="Setting" />
          <p>환경설정</p>
        </Link>
      </FooterItem>
    </FooterWrapper>
  );
};

export default Footer;
