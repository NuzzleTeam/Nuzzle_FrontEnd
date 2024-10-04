import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { userSlice } from "../features/userSlice";

const LogoutModal = ({ showModal, handleClose, handleLogout }) => {
  if (!showModal) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <ModalHeader>로그아웃 안내</ModalHeader>
        <ModalBody>앱에서 로그아웃 하시겠어요?</ModalBody>
        <ModalFooter>
          <CancelButton onClick={handleClose}>취소</CancelButton>
          <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
        </ModalFooter>
      </ModalContent>
    </ModalOverlay>
  );
};

const Setting = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(false);
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleLogout = async () => {
    const accessToken = "<access_token>";
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const logoutUrl = "https://api.nuz2le.com/api/v1/auth/logout";

    try {
      const response = await fetch(proxyUrl + logoutUrl, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      });

      const result = await response.json();

      if (result.success) {
        console.log("로그아웃 성공:", result);
        navigate("/firstpage");
      } else {
        console.error("로그아웃 실패:", result.error || "Unknown error");
        navigate("/firstpage"); //나중에 지우기
      }
    } catch (error) {
      console.error("오류:", error);
      navigate("/firstpage"); // 나중에 지우기
    }
  };

  const userInfo = {
    name: "John Doe",
    username: "johndoe123",
    familyMembers: ["Jane Doe", "Jimmy Doe"],
  };

  return (
    <SettingWrapper>
      <UserInfo>
        <h2>유저 정보</h2>
        <p>Name: {userInfo.name}</p>
        <p>Username: {userInfo.username}</p>
        <p>Family Members:</p>
        <ul>
          {userInfo.familyMembers.map((member, index) => (
            <li key={index}>{member}</li>
          ))}
        </ul>
      </UserInfo>
      <LogoutButtonWrapper>
        <LogoutButton onClick={() => setShowModal(true)}>Logout</LogoutButton>
      </LogoutButtonWrapper>
      <LogoutModal
        showModal={showModal}
        handleClose={handleCloseModal}
        handleLogout={handleLogout}
      />
    </SettingWrapper>
  );
};

export default Setting;

const UpdateMessage = styled.p`
  font-size: 1rem;
  color: #ff87b7;
  margin-bottom: 20px;
  font-family: "Pretendard", sans-serif;
`;

const SettingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const UserInfo = styled.div`
  font-family: "Pretendard";
  text-align: center;
  margin-bottom: 40px;

  h2 {
    margin-bottom: 10px;
  }

  p {
    margin: 5px 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }
`;

const LogoutButtonWrapper = styled.div`
  margin-top: auto;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  width: 300px;
  background-color: #ffe6f0;
  border-radius: 20px;
  padding: 20px;
  text-align: center;
  border: solid #ff87b7 2.3px;
`;

const ModalHeader = styled.h3`
  color: #333;
  margin-bottom: 10px;
  font-size: 18px;
  font-family: "Pretendard";
`;

const ModalBody = styled.p`
  color: black;
`;

const ModalFooter = styled.div`
  display: flex;
  justify-content: space-around;
`;

const CancelButton = styled.button`
  background-color: #dfdfdf;
  color: black;
  padding: 10px 30px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-weight: bold;
`;

const LogoutButton = styled.button`
  background-color: #ffb1d0;
  color: black;
  padding: 10px 30px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-weight: bold;
`;
