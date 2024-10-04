import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { logout, selectAccessToken } from "../features/userSlice";

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
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const accessToken = useSelector(selectAccessToken);

  useEffect(() => {
    setShowModal(false);
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleLogout = async () => {
    const logoutUrl = `${import.meta.env.VITE_API_BASE_URL}/api/v1/auth/logout`;

    try {
      const response = await fetch(logoutUrl, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          // "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to logout");
      }

      const result = await response.json();

      if (result.success) {
        console.log("로그아웃 성공:", result);
        dispatch(logout());
        navigate("/peek");
      } else {
        console.error("로그아웃 실패:", result.error || "Unknown error");
        navigate("/calendar"); //나중에 지우기
      }
    } catch (error) {
      console.error("로그아웃 중 오류 발생:", error);
      navigate("/calendar"); // 나중에 지우기
    }
  };

  const userInfo = {
    name: "Dummy user",
    username: "DummyUser 1234",
    familyMembers: ["Dummy family1", "Dummy family2"],
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
  margin-top: 10px;
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
