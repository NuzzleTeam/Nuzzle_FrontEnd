import { useState } from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer/Footer';

const Page1 = () => {
  const initialEmojis = ["😘", "😢", "😡"];
  const allEmojis = ["😘", "😢", "😡", "❤️", "👍", "❓", "🌸", "💤", "🎉"];
  
  const [showAll, setShowAll] = useState(false); // 이름 수정 필요 (겹침)
  const [fallingEmojis, setFallingEmojis] = useState([]); // state 수정 예정

  const handleShowAllClick = () => {
    setShowAll(true);
  };

  const handleHideAllClick = () => {
    setShowAll(false);
  };

  const handleEmojiClick = (emoji) => {
    // 여러 개의 이모지가 랜덤한 위치에서 떨어지도록 설정
    const newFallingEmojis = Array.from({ length: 10 }, (_, index) => ({
      emoji,
      id: Date.now() + index,
      left: Math.random() * 100, // 화면 너비 퍼센트 단위로 랜덤 위치 설정해서 떨어뜨림
      duration: Math.random() * 1 + 1 // 1초에서 2초 사이 지속 시간으로 설정
    }));
    setFallingEmojis(newFallingEmojis);
    // 일정 시간 후 이모지 리스트를 비워 화면 정리 
    setTimeout(() => setFallingEmojis([]), 2000);
  };

  return (
    <Container>
      <ImageContainer>
        <div>이미지가 들어가야 할 자리입니다.</div> 
      </ImageContainer>
      <EmojiContainer>
        {(showAll ? allEmojis : initialEmojis).map((emoji, index) => (
          <EmojiButton key={index} onClick={() => handleEmojiClick(emoji)}>
            {emoji}
          </EmojiButton>
        ))}
        {!showAll ? (
          <EmojiButton onClick={handleShowAllClick}>+</EmojiButton>
        ) : (
          <EmojiButton onClick={handleHideAllClick}>-</EmojiButton>
        )}
      </EmojiContainer>
      {fallingEmojis.map(({ emoji, id, left, duration }) => (
        <FallingEmoji key={id} emoji={emoji} left={left} duration={duration} />
      ))}
      <Footer></Footer>
    </Container>
  );
};

export default Page1;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #FCFDF5;
  padding: 20px;
  position: relative;
`;

const ImageContainer = styled.div`
  position: relative;
`;

const EmojiContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  position: absolute;
  bottom: 20px;
  right: 20px;
  background: rgba(255, 255, 255, 0.8);
  padding: 10px;
  border-radius: 20px;
`;

const EmojiButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

// FallingEmoji 컴포넌트 추후 분리 예정
const FallingEmoji = ({ emoji, left, duration }) => {
  return (
    <FallingEmojiContainer style={{ left: `${left}vw`, animationDuration: `${duration}s` }}>
      {emoji}
    </FallingEmojiContainer>
  );
};

const FallingEmojiContainer = styled.div`
  position: fixed;
  top: 0;
  transform: translateX(-50%);
  font-size: 24px;
  animation: fall linear forwards;

  @keyframes fall {
    from {
      top: 0;
      opacity: 1;
    }
    to {
      top: 100vh;
      opacity: 0;
    }
  }
`;
