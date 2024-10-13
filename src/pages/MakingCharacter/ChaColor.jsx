import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { setColor } from "../../features/colorSlice";
import { setCharacterImage } from "../../features/characterSlice";

const colors = ["#FFB1D0", "#90b4e0", "#cdb29f", "#3a2e29"]; // 핑크, 파랑, 갈색, 검정색
const characterTypes = ['rabbit', 'cat', 'bear']; // 캐릭터 종류

const ChaColor = () => {
  const [randomCharacter, setRandomCharacter] = useState(characterTypes[Math.floor(Math.random() * characterTypes.length)]);
  const selectedColor = useSelector((state) => state.color.selectedColor);
  const characterImage = useSelector((state) => state.character.characterImage);
  const accessToken = useSelector((state) => state.user.accessToken);
  const familyId = useSelector((state) => state.user.familyId);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const characterImages = {
    "#FFB1D0": {
      rabbit: "/src/assets/chaMake/pinkrabbit.gif",
      cat: "/src/assets/chaMake/pinkcat.gif",
      bear: "/src/assets/chaMake/pinkbear.gif",
    },
    "#90b4e0": {
      rabbit: "/src/assets/chaMake/bluerabbit.gif",
      cat: "/src/assets/chaMake/bluecat.gif",
      bear: "/src/assets/chaMake/bluebear.gif",
    },
    "#3a2e29": {
      rabbit: "/src/assets/chaMake/blackrabbit.gif",
      cat: "/src/assets/chaMake/blackcat.gif",
      bear: "/src/assets/chaMake/blackbear.gif",
    },
    "#cdb29f": {
      rabbit: "/src/assets/chaMake/brownrabbit.gif",
      cat: "/src/assets/chaMake/browncat.gif",
      bear: "/src/assets/chaMake/brownbear.gif",
    },
  };
/*
  useEffect(() => {
    // 애착이 랜덤 캐릭터 설정 
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const targetUrl = `https://api.nuz2le.com/api/family/${familyId}/assign-random-pet`;

    fetch(proxyUrl + targetUrl, {
      method: "PATCH",
      headers:{
        "Authorization":`Bearer ${accessToken}`
      }
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const fetchedCharacter = data["pet-random"]; // 캐릭터 종류 받아오고
        setRandomCharacter(fetchedCharacter); // 일단 state 써서 저장해놓자

        // 해당 캐릭터와 초기 색상에 맞는 이미지 설정
        const initialColor = colors[0];
        dispatch(setColor(initialColor)); // 초기 색상은 핑크로 설정
        dispatch(
          setCharacterImage(characterImages[initialColor][fetchedCharacter])
        ); // fetchedCharacter 종류에 맞는 핑크색 캐릭터 띄우기
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
*/

  useEffect(() => {
    // 랜덤 캐릭터의 초기 색상에 맞는 이미지 설정
    const initialColor = colors[0];
    dispatch(setColor(initialColor)); // 초기 색상 설정
    dispatch(setCharacterImage(characterImages[initialColor][randomCharacter])); // 랜덤 캐릭터 이미지 설정
  }, [dispatch, randomCharacter])

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
        headers:{
          "Authorization":`Bearer ${accessToken}`
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
