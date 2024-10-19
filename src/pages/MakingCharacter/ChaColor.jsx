import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { setColor } from "../../features/colorSlice";
import { setCharacterImage } from "../../features/characterSlice";
import pinkrabbit from "/src/assets/chaMake/pinkrabbit.gif";
import pinkcat from "/src/assets/chaMake/pinkcat.gif";
import pinkbear from "/src/assets/chaMake/pinkbear.gif";
import bluerabbit from "/src/assets/chaMake/bluerabbit.gif";
import bluecat from "/src/assets/chaMake/bluecat.gif";
import bluebear from "/src/assets/chaMake/bluebear.gif";
import blackrabbit from "/src/assets/chaMake/blackrabbit.gif";
import blackcat from "/src/assets/chaMake/blackcat.gif";
import blackbear from "/src/assets/chaMake/blackbear.gif";
import brownrabbit from "/src/assets/chaMake/brownrabbit.gif";
import browncat from "/src/assets/chaMake/browncat.gif";
import brownbear from "/src/assets/chaMake/brownbear.gif";

const colors = ["#FFB1D0", "#90b4e0", "#cdb29f", "#3a2e29"]; // 핑크, 파랑, 갈색, 검정색
const characterTypes = ["rabbit", "cat", "bear"]; // 캐릭터 종류

const ChaColor = () => {
  const [randomCharacter, setRandomCharacter] = useState(
    characterTypes[Math.floor(Math.random() * characterTypes.length)]
  );
  const selectedColor = useSelector((state) => state.color.selectedColor);
  const characterImage = useSelector((state) => state.character.characterImage);
  const accessToken = useSelector((state) => state.user.accessToken);
  const familyId = useSelector((state) => state.user.familyId);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const characterImages = {
    "#FFB1D0": {
      "rabbit":  pinkrabbit ,
      "cat":  pinkcat ,
      "bear":  pinkbear ,
    },
    "#90b4e0": {
      "rabbit":  bluerabbit ,
      "cat":  bluecat ,
      "bear":  bluebear ,
    },
    "#3a2e29": {
      "rabbit":  blackrabbit ,
      "cat":  blackcat ,
      "bear":  blackbear ,
    },
    "#cdb29f": {
      "rabbit":  brownrabbit ,
      "cat":  browncat ,
      "bear":  brownbear ,
    },
  };


  useEffect(() => {
    // 랜덤 캐릭터의 초기 색상에 맞는 이미지 설정
    const initialColor = colors[0];
    dispatch(setColor(initialColor)); // 초기 색상 설정
    dispatch(setCharacterImage(characterImages[initialColor][randomCharacter])); // 랜덤 캐릭터 이미지 설정
  }, [dispatch, randomCharacter]);

  const handleColorClick = (color) => {
    dispatch(setColor(color));
    dispatch(setCharacterImage(characterImages[color][randomCharacter]));
  };

  const handleSelectClick = () => {
    if (selectedColor) {
      const proxyUrl = "https://cors-anywhere.herokuapp.com/";
      const targetUrl = `https://api.nuz2le.com/api/family/${familyId}/pet-color`; // 애착이 색상 선택(post), 수정(patch) 링크

      fetch(proxyUrl + targetUrl, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ selectedColor }),
      })
        .then((response) => {
          if (response.ok) {
            console.log("애착이 색 설정 성공", response);
            navigate("/ChaName"); // POST 요청이 성공하면 페이지 이동
          } else {
            console.error("애착이 색 전송 실패");
          }
        })
        .catch((error) => {
          console.error("애착이 색 전송 오류:", error);
        });
    }
  };

  return (
    <Container>
      <Title>애착이의 색상을 선택해보세요</Title>
      <CharacterContainer>
        <CharacterImage src={characterImage} alt="character" />
      </CharacterContainer>
      <Horizonline></Horizonline>
      <ColorOptions>
        {colors.map((color) => (
          <ColorButton
            key={color}
            color={color}
            isselected={selectedColor === color ? "true" : "false"}
            onClick={() => handleColorClick(color)}
          />
        ))}
      </ColorOptions>
      <SelectButton
        disabled={!selectedColor}
        onClick={handleSelectClick}
        isselected={selectedColor ? "true" : "false"}
      >
        선택하기
      </SelectButton>
    </Container>
  );
};

export default ChaColor;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #fcfdf5;
  padding: 20px;
  position: relative;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
  font-family: "Pretendard";
  font-weight: bold;
`;

const CharacterContainer = styled.div`
  width: 400px;
  height: 500px;
  position: relative;
`;

const CharacterImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Horizonline = styled.div`
  width: 326.5px;
  height: 0.5px;
  position: absolute;
  bottom: 370px;
  background-color: #8e8e8e;
  box-shadow: 0 0 0 0.5px #8e8e8e;
`;

const ColorOptions = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 380px;
  margin-bottom: 50px;
  margin-top: -30px;
`;

const ColorButton = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: none;
  background-color: ${(props) => props.color};
  cursor: pointer;
  font-family: "Pretendard";
  position: relative;
  &:focus {
    outline: none;
  }

  ${(props) =>
    props.isselected === "true" &&
    `
    box-shadow: 0 0 0 3px white, 0 0 0 5px black; 
  `}
`;

const SelectButton = styled.button`
  background-color: ${(props) =>
    props.isselected === "true" ? "#FFB1D0" : "#ccc"};
  color: black;
  font-family: "Pretendard";
  font-weight: bold;
  font-size: 16px;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 40px;
  bottom: 20px;
  width: 205px;
  height: 50px;
  &:disabled {
    cursor: not-allowed;
  }
`;
