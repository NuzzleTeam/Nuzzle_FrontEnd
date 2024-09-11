import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import popupImage from "../../src/assets/popupImage.png";
import noPhotoImage1 from "../../src/assets/no_photo_1.png";
import noPhotoImage2 from "../../src/assets/no_photo_2.png";
import noPhotoImage3 from "../../src/assets/no_photo_3.png";

const familyMembers = ["막내", "엄마", "아빠", "동생"];
const noPhotoImages = [noPhotoImage1, noPhotoImage2, noPhotoImage3];

const Peek = () => {
  const [photos, setPhotos] = useState({});
  const [familyIndex, setFamilyIndex] = useState(0);
  const [initialEmojis, setInitialEmojis] = useState(["😘", "😢", "😡"]);
  const allEmojis = ["😘", "😢", "😡", "❤️", "👍", "❓", "🌸", "💤", "🎉"];
  const [showAllEmojis, setShowAllEmojis] = useState(false);
  const [scatteredEmojis, setScatteredEmojis] = useState([]);
  const navigate = useNavigate();
  const userId = 2; // 임시로 아이디 지정
  const currentMember = familyMembers[familyIndex];
  const currentPhoto = photos[currentMember];
  const [lastScrollTime, setLastScrollTime] = useState(0);
  const scrollDelay = 650;

  useEffect(() => {
    const loadedPhotos = {};
    familyMembers.forEach((member) => {
      const savedPhoto = localStorage.getItem(`${member}Photo`);
      if (savedPhoto) {
        loadedPhotos[member] = savedPhoto;
      }
    });
    setPhotos(loadedPhotos);

    fetchRecentEmojis(userId);
  }, [userId]);

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

  const handleEmojiClick = async (emoji) => {
    const emojiIdMap = {
      "😘": 9,
      "😢": 3,
      "😡": 8,
      "❤️": 4,
      "👍": 2,
      "❓": 6,
      "🌸": 7,
      "💤": 5,
      "🎉": 1,
    };
    const emojiId = emojiIdMap[emoji];
    const pictureId = 1; // 임시 picture ID

    try {
      await registerEmoji(userId, pictureId, emojiId);

      const newScatteredEmojis = Array.from({ length: 15 }, (_, index) => ({
        emoji,
        id: Date.now() + index,
        left: Math.random() * 80,
        top: Math.random() * 70 + 15,
        size: Math.random() * 1.5 + 1,
      }));
      setScatteredEmojis(newScatteredEmojis);

      setTimeout(() => setScatteredEmojis([]), 4000);
    } catch (error) {
      console.error("Failed to register emoji:", error);
    }
  };

  const handleNavigate = () => {
    navigate("/today-question");
  };

  const nextFamilyMember = (direction) => {
    setFamilyIndex((prevIndex) => {
      if (direction === "next") {
        return (prevIndex + 1) % familyMembers.length;
      } else {
        return (prevIndex - 1 + familyMembers.length) % familyMembers.length;
      }
    });
  };

  const handleScroll = useCallback(
    (event) => {
      const currentTime = new Date().getTime();

      // 마지막 스크롤로부터 충분한 시간이 지나면 가족 변경
      if (currentTime - lastScrollTime > scrollDelay) {
        if (event.deltaY > 0) {
          nextFamilyMember("next"); // 아래로 스크롤 시
        } else {
          nextFamilyMember("prev"); // 위로 스크롤 시
        }
        setLastScrollTime(currentTime);
      }
    },
    [lastScrollTime]
  );

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [handleScroll]);

  const fetchRecentEmojis = async (userId) => {
    try {
      const response = await fetch(`/api/emoji/users/${userId}/recent-emojis`);
      if (!response.ok) throw new Error("Failed to fetch recent emojis");

      const data = await response.json();
      const recentEmojis = data.map((emoji) =>
        String.fromCodePoint(parseInt(emoji.emojiImg.slice(2), 16))
      );
      setInitialEmojis(recentEmojis);
    } catch (error) {
      console.error("Error fetching recent emojis:", error);
    }
  };

  const registerEmoji = async (userId, pictureId, emojiId) => {
    try {
      const response = await fetch(`/api/emoji/pictures/${pictureId}/emojis`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, emojiId }),
      });
      if (!response.ok) throw new Error("Failed to register emoji");

      const result = await response.json();
      console.log("Emoji registered:", result);
    } catch (error) {
      console.error("Error registering emoji:", error);
    }
  };

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

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  background-color: #fcfdf5;
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
  padding-top: 20px;
  height: auto;
  position: relative;
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
  margin-top: -30px;
`;

const BoldText = styled.span`
  font-weight: bold;
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
