import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import sharedLinkImg from "/src/assets/img/shared_link.png";

// 공유된 링크 접속 페이지

function SharedLink() {
  const navigate = useNavigate();

  const goToConnectComplete = () => {
    navigate("/connect/complete");
  };

  return (
    <>
      <ConnectWrapper>
        <ConnectContentWrapper>
          <Top>
            <Img src={sharedLinkImg}></Img>
          </Top>
          <Title>
            <span>_____님이 보낸 초대장이에요. </span>
            <span>우리 가족 일상, 함께 엿보러 가볼까요?</span>
          </Title>
          <ConnectBtnWrapper>
            <AddBtn>거절</AddBtn>
            <CompleteBtn onClick={goToConnectComplete}>수락</CompleteBtn>
          </ConnectBtnWrapper>
        </ConnectContentWrapper>
      </ConnectWrapper>
    </>
  );
}

export default SharedLink;

const ConnectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-color: #fcfdf5;
`;

const ConnectContentWrapper = styled.div`
  width: 348px;
  height: 90%;
  top: 50%;
  left: 50%;
  transform: translate(0%, -7%);
`;

const Top = styled.div`
  display: flex;
  top: 50%;
  left: 50%;
  transform: translate(0%, 2%);
`;

const Title = styled.div`
  text-align: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  top: 50%;
  left: 50%;
  transform: translate(0%, 50%);
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Img = styled.img`
  width: 244px;
  height: 502px;
  top: 50%;
  left: 50%;
  transform: translate(20%, 0%);
`;

const ConnectBtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  top: 50%;
  left: 50%;
  gap: 10px;
  transform: translate(0%, 20%);
`;

const AddBtn = styled.button`
  width: 315px;
  height: 50px;
  border-radius: 30px;
  background-color: white;
  top: 50%;
  left: 50%;
  transform: translate(0%, 200%);
  font-weight: 700;
  font-size: 14px;
  line-height: 16.8px;
  border: 1px solid #cbcbcb;
`;

const CompleteBtn = styled.button`
  width: 315px;
  height: 50px;
  border-radius: 100px;
  background-color: #ffb1d0;
  border: none;
  top: 50%;
  left: 50%;
  transform: translate(0%, 200%);
  font-weight: 700;
  font-size: 14px;
  line-height: 16.8px;
`;
