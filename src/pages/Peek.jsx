import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import popupImage from "../../src/assets/popupImage.png";
import noPhotoImage from "../../src/assets/no_photo.png";

const Peek = () => {
  const [photos, setPhotos] = useState([]);
  const initialEmojis = ["😘", "😢", "😡"];
  const allEmojis = ["😘", "😢", "😡", "❤️", "👍", "❓", "🌸", "💤", "🎉"];
  const [showAllEmojis, setShowAllEmojis] = useState(false);
  const [fallingEmojis, setFallingEmojis] = useState([]);

  useEffect(() => {
    const savedPhoto = localStorage.getItem("capturedPhoto");
    if (savedPhoto) {
      setPhotos([savedPhoto]);
    }
  }, []);

  const handleShowAllClick = () => {
    setShowAllEmojis(true);
  };

  const handleHideAllClick = () => {
    setShowAllEmojis(false);
  };

  const handleEmojiClick = (emoji) => {
    const newFallingEmojis = Array.from({ length: 10 }, (_, index) => ({
      emoji,
      id: Date.now() + index,
      left: Math.random() * 100,
      duration: Math.random() * 1 + 1,
    }));
    setFallingEmojis(newFallingEmojis);
    setTimeout(() => setFallingEmojis([]), 2000);
  };

  return (
    <PageContainer>
      <ImageContainer>
        <img src={popupImage} alt="Element" style={imageElementStyle} />
      </ImageContainer>
      <PhotoContainer>
        {photos.length === 0 ? (
          <NoPhotoMessage>
            막내 님은 아직 업로드하지 않았어요
            <NoPhotoImageContainer>
              <img
                src={noPhotoImage}
                alt="No Photo"
                style={imageElementStyle}
              />
            </NoPhotoImageContainer>
            <NoPhotoButton>깨우기</NoPhotoButton>
          </NoPhotoMessage>
        ) : (
          photos.map((photo, index) => (
            <PhotoItem key={index}>
              <img
                src={photo}
                alt={`Family ${index}`}
                style={imageElementStyle}
              />
              <EmojiContainer>
                {(showAllEmojis ? allEmojis : initialEmojis).map(
                  (emoji, emojiIndex) => (
                    <EmojiButton
                      key={emojiIndex}
                      onClick={() => handleEmojiClick(emoji)}
                    >
                      {emoji}
                    </EmojiButton>
                  )
                )}
                {!showAllEmojis ? (
                  <EmojiButton onClick={handleShowAllClick}>+</EmojiButton>
                ) : (
                  <EmojiButton onClick={handleHideAllClick}>-</EmojiButton>
                )}
              </EmojiContainer>
            </PhotoItem>
          ))
        )}
      </PhotoContainer>
      {fallingEmojis.map(({ emoji, id, left, duration }) => (
        <FallingEmoji key={id} emoji={emoji} left={left} duration={duration} />
      ))}
    </PageContainer>
  );
};

export default Peek;

// Styled Components

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  background-color: #fff;
  position: relative;
`;

const ImageContainer = styled.div`
  width: 95%;
  height: auto;
  padding: 5px 10px;
`;

const PhotoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
`;

const PhotoItem = styled.div`
  width: 45%;
  margin: 10px;
  border-radius: 15px;
  overflow: hidden;
`;

const NoPhotoMessage = styled.div`
  text-align: center;
  margin-top: 20px;
  font-size: 1.2em;
`;

const NoPhotoImageContainer = styled.div`
  margin-top: 10px;
`;

const NoPhotoButton = styled.button`
  position: absolute;
  top: 80%;
  left: 40%;
  padding: 10px 20px;
  background-color: #ffcccc;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;

const EmojiContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
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

const fallAnimation = keyframes`
  from {
    top: 0;
    opacity: 1;
  }
  to {
    top: 100vh;
    opacity: 0;
  }
`;

const FallingEmojiContainer = styled.div`
  position: fixed;
  top: 0;
  transform: translateX(-50%);
  font-size: 24px;
  animation: ${fallAnimation} linear forwards;
`;

const FallingEmoji = ({ emoji, left, duration }) => (
  <FallingEmojiContainer
    style={{ left: `${left}vw`, animationDuration: `${duration}s` }}
  >
    {emoji}
  </FallingEmojiContainer>
);

// Inlined image styles
const imageElementStyle = {
  width: "95%",
  height: "auto",
  padding: "5px 10px",
};
