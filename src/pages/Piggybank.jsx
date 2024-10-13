import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const Piggybank = () => {
  const [savings, setSavings] = useState(0);
  const [bonusVisible, setBonusVisible] = useState(false);
  const [showPopup, setShowPopup] = useState(true);
  const [showGameOverPopup, setShowGameOverPopup] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [timer, setTimer] = useState(5);
  const targetSavings = 100000;
  const [bonusClicked, setBonusClicked] = useState(false);

  const handleDeposit = () => {
    const randomAmount = Math.floor(Math.random() * 1500) + 500;
    setSavings((prevSavings) =>
      Math.min(prevSavings + randomAmount, targetSavings)
    );
  };

  const handleBonus = () => {
    setSavings((prevSavings) => Math.min(prevSavings + 10000, targetSavings));
    setBonusClicked(true);
    setBonusVisible(false);
  };

  useEffect(() => {
    if (gameStarted && timer > 0 && savings < targetSavings) {
      const countdown = setTimeout(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 500);
      return () => clearTimeout(countdown);
    } else if (gameStarted && timer === 0 && savings < targetSavings) {
      setShowGameOverPopup(true);
    }
  }, [timer, savings, gameStarted]);

  useEffect(() => {
    const showBonus = () => {
      setBonusClicked(false);
      setBonusVisible(true);

      setTimeout(() => {
        if (!bonusClicked && bonusVisible) {
          setSavings((prevSavings) => Math.max(prevSavings - 10000, 0));
          setBonusVisible(false);
        }
      }, 1000);
    };

    const randomTime = Math.random() * 2000 + 1000;
    if (gameStarted && savings < targetSavings && timer > 0) {
      const timeout = setTimeout(showBonus, randomTime);
      return () => clearTimeout(timeout);
    }
  }, [savings, bonusClicked, bonusVisible, timer, gameStarted]);

  const startGame = () => {
    setShowPopup(false);
    setGameStarted(true);
  };

  const retryGame = () => {
    setShowGameOverPopup(false);
    setSavings(0);
    setTimer(5);
    setBonusVisible(false);
    setGameStarted(true);
  };

  return (
    <Container>
      {showPopup && (
        <Popup>
          <PopupContent>
            <PopupTitle>게임 설명</PopupTitle>
            <PopupBody>
              <p>저금통을 클릭하여 목표 금액을 달성하세요!</p>
              <p>
                보너스 코인을 1초 내에 클릭하면 +10,000원, 실패 시 -10,000원이
                됩니다!
              </p>
              <p>제한 시간은 5초입니다. 성공하세요!</p>
            </PopupBody>
            <PopupButton onClick={startGame}>시작하기</PopupButton>
          </PopupContent>
        </Popup>
      )}

      {showGameOverPopup && (
        <Popup>
          <PopupContent>
            <PopupTitle>게임 실패!</PopupTitle>
            <PopupBody>목표 금액을 달성하지 못했습니다.</PopupBody>
            <PopupButton onClick={retryGame}>다시 시도하기</PopupButton>
          </PopupContent>
        </Popup>
      )}

      <Title>저금통 게임</Title>
      <UpdateMessage>
        추후 업데이트 될 기능입니다. 임시 페이지를 즐겨주세요.
      </UpdateMessage>
      <ProgressBar>
        <Filler style={{ width: `${(savings / targetSavings) * 100}%` }} />
      </ProgressBar>
      {gameStarted && <TimerDisplay>남은 시간: {timer}초</TimerDisplay>}
      <PiggybankWrapper>
        <PiggybankImage onClick={handleDeposit}>🐷</PiggybankImage>
        <SavingsAmount>저축된 금액: {savings.toLocaleString()}원</SavingsAmount>
        <TargetSavings>목표: {targetSavings.toLocaleString()}원</TargetSavings>
        {bonusVisible && timer > 0 && savings < targetSavings && (
          <BonusCoin onClick={handleBonus}>💰 +10,000원</BonusCoin>
        )}
        {savings >= targetSavings && (
          <VictoryMessage>저축 목표를 달성했습니다!</VictoryMessage>
        )}
      </PiggybankWrapper>
    </Container>
  );
};

export default Piggybank;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fcfdf5;
  padding: 20px;
  height: 100vh;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  font-family: "Pretendard", sans-serif;
  color: #353535;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 30px;
  background-color: #f3f3f3;
  border-radius: 15px;
  margin-bottom: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const Filler = styled.div`
  background-color: #ffb1d0;
  border-radius: inherit;
  transition: width 0.4s ease-in-out;
`;

const TimerDisplay = styled.p`
  font-size: 1.5rem;
  color: #353535;
  margin-bottom: 20px;
`;

const UpdateMessage = styled.p`
  font-size: 1rem;
  color: #ff87b7;
  margin-bottom: 20px;
  font-family: "Pretendard", sans-serif;
`;

const PiggybankWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffebf2;
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const PiggybankImage = styled.div`
  font-size: 6rem;
  margin-bottom: 20px;
  cursor: pointer;
  animation: wiggle 1s infinite;

  @keyframes wiggle {
    0%,
    100% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(10deg);
    }
    50% {
      transform: rotate(-10deg);
    }
    75% {
      transform: rotate(10deg);
    }
  }
`;

const SavingsAmount = styled.p`
  font-size: 1.5rem;
  color: #353535;
  font-weight: bold;
  margin-bottom: 10px;
`;

const TargetSavings = styled.p`
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 20px;
`;

const BonusCoin = styled.div`
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 2rem;
  background-color: #ffe34d;
  padding: 10px 20px;
  border-radius: 50px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  animation: bounce 1s infinite;

  &:hover {
    background-color: #ffd700;
  }

  @keyframes bounce {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
`;

const VictoryMessage = styled.p`
  margin-top: 20px;
  font-size: 1.5rem;
  color: #ff87b7;
  font-weight: bold;
  animation: bounce 1s infinite;
  text-align: center;
`;

const Popup = styled.div`
  justify-content: center;
  align-items: center;
  z-index: 1000;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: stretch;
  position: absolute;
  width: 360px;
`;

const PopupContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  animation: fade-in 0.5s ease-in-out;
`;

const PopupTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 10px;
  color: #353535;
`;

const PopupBody = styled.div`
  font-size: 1rem;
  color: #555;
  margin-bottom: 20px;
`;

const PopupButton = styled.button`
  padding: 10px 20px;
  font-size: 1.2rem;
  font-weight: bold;
  background-color: #ff87b7;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #ff5c8a;
  }
`;
