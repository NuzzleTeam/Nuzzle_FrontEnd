import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import popupImage from "../../src/assets/popupImage.png";
import noPhotoImage1 from "../../src/assets/no_photo_1.png";
import noPhotoImage2 from "../../src/assets/no_photo_2.png";
import noPhotoImage3 from "../../src/assets/no_photo_3.png";

const familyMembers = ["막내", "엄마", "아빠", "동생"];
const noPhotoImages = [noPhotoImage1, noPhotoImage2, noPhotoImage3];

const Peek = () => {
  const [photos, setPhotos] = useState({});
  const [familyIndex, setFamilyIndex] = useState(0);
  const initialEmojis = ["😘", "😢", "😡"];
  const allEmojis = ["😘", "😢", "😡", "❤️", "👍", "❓", "🌸", "💤", "🎉"];
  const [showAllEmojis, setShowAllEmojis] = useState(false);
  const [scatteredEmojis, setScatteredEmojis] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loadedPhotos = {};
    familyMembers.forEach((member) => {
      const savedPhoto = localStorage.getItem(`${member}Photo`);
      if (savedPhoto) {
        loadedPhotos[member] = savedPhoto;
      }
    });
    setPhotos(loadedPhotos);
  }, []);

  const getRandomNoPhotoImage = () => {
    const randomIndex = Math.floor(Math.random() * noPhotoImages.length);
    return noPhotoImages[randomIndex];
  };

  const handleShowAllClick = () => {
    setShowAllEmojis(true);
  };

  const handleHideAllClick = () => {
    setShowAllEmojis(false);
  };

  const handleEmojiClick = (emoji) => {
    // Generate scattered emojis randomly positioned within the container
    const newScatteredEmojis = Array.from({ length: 15 }, (_, index) => ({
      emoji,
      id: Date.now() + index,
      left: Math.random() * 80, // Randomize horizontal position
      top: Math.random() * 70 + 15, // Randomize vertical position with some offset
      size: Math.random() * 1.5 + 1, // Randomize size
    }));
    setScatteredEmojis(newScatteredEmojis);

    // Clear emojis after a delay (optional)
    setTimeout(() => setScatteredEmojis([]), 4000);
  };

  const handleNavigate = () => {
    navigate("/today-question");
  };

  const nextFamilyMember = () => {
    setFamilyIndex((prevIndex) => (prevIndex + 1) % familyMembers.length);
  };

  const currentMember = familyMembers[familyIndex];
  const currentPhoto = photos[currentMember];

  return (
    <PageContainer>
      <ImageContainer onClick={handleNavigate}>
        <img src={popupImage} alt="Element" style={imageElementStyle} />
      </ImageContainer>
      <PhotoContainer>
        {currentPhoto ? (
          <PhotoItem>
            <img
              src={currentPhoto}
              alt={`${currentMember}'s photo`}
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
        ) : (
          <NoPhotoMessage>
            <BoldText>{currentMember}</BoldText> 님은
            <br />
            아직 업로드하지 않았어요
            <NoPhotoImageContainer>
              <img
                src={getRandomNoPhotoImage()}
                alt="No Photo"
                style={imageElementStyle}
              />
            </NoPhotoImageContainer>
          </NoPhotoMessage>
        )}
      </PhotoContainer>
      <NextButton onClick={nextFamilyMember}>다음 가족 보기</NextButton>
      {scatteredEmojis.map(({ emoji, id, left, top, size }) => (
        <ScatteredEmoji
          key={id}
          style={{
            left: `${left}%`,
            top: `${top}%`,
            fontSize: `${size}rem`,
          }}
        >
          {emoji}
        </ScatteredEmoji>
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
  cursor: pointer;
`;

const PhotoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px;
  height: auto;
  position: relative; /* Ensure emojis are positioned relative to this */
`;

const PhotoItem = styled.div`
  width: 100%;
  border-radius: 15px;
  overflow: hidden;
`;

const NoPhotoMessage = styled.div`
  text-align: center;
  font-size: 1.2em;
  line-height: 1.5;
`;

const NoPhotoImageContainer = styled.div`
  margin-top: 10px;
`;

const BoldText = styled.span`
  font-weight: bold;
`;

const NextButton = styled.button`
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

const ScatteredEmoji = styled.div`
  position: absolute;
  animation: fadeInOut 4s ease-in-out;
  @keyframes fadeInOut {
    0% {
      opacity: 0;
    }
    20% {
      opacity: 1;
    }
    80% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

const imageElementStyle = {
  width: "95%",
  height: "auto",
  padding: "5px 10px",
};
