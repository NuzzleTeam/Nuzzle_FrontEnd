import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const ChaMake1 = () => {
  const navigate = useNavigate();
  const selectedColor = useSelector((state) => state.color.selectedColor);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (selectedColor != '') {
        navigate('/ChaComplete', { state: { selectedColor } });
      } else {
        navigate('/ChaColor');
      }
    }, 3000);

    return () => clearTimeout(timeout);
  }, [selectedColor, navigate]);

  return (
    <Container>
      <SpeechBubble>{selectedColor ? "애착이로 변신중..." : "우리 가족 키워드를 바탕으로 애착 인형을 고르는 중..."}</SpeechBubble>
      <CharacterImage src="src/assets/ChaMaking.png" alt="애착이" />
      <CharacterColor color={selectedColor} />
    </Container>
  );
};

export default ChaMake1;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(to bottom, pink, yellow);
`;

const SpeechBubble = styled.div`
  background: white;
  padding: 10px 20px;
  border-radius: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  font-size: 18px;
  text-align: center;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    border-width: 10px;
    border-style: solid;
    border-color: white transparent transparent transparent;
  }
`;

const CharacterColor = styled.div`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  animation: spin 4s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const CharacterImage = styled.img`
  width: 250px;
  height: auto;
  object-fit: cover;
  border-radius: 50%;
`;
