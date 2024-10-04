import React, { useState, useEffect } from "react";
import styled from "styled-components";

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
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    setShowModal(true);
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleLogout = async () => {
    const accessToken = "<access_token>";
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
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
      } else {
        console.error("로그아웃 실패:", result.error || "Unknown error");
      }
    } catch (error) {
      console.error("오류:", error);
    }
  };

  return (
    <SettingWrapper>
      <LogoutModal
        showModal={showModal}
        handleClose={handleCloseModal}
        handleLogout={handleLogout}
      />
      <UpdateMessage>추후 업데이트 될 기능입니다.</UpdateMessage>
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
