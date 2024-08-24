import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setCharacterImage,
  resetCharacterImage,
} from "../../features/characterSlice";
import styled from "styled-components";

const Home = () => {
  const [isMoving, setIsMoving] = useState(false); // 캐릭터 애니메이션 스타일 관리 위해 추가된 상태
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const characterImage = useSelector((state) => state.character.characterImage);
  const characterImages2 = useSelector(
    (state) => state.character.characterImages2
  );
  const name = useSelector((state) => state.name.name);
  const family_id = useSelector((state) => state.user.familyId);

  const handleChaClick = () => {
    if (characterImage === "") {
      navigate("/Keyword");
    }
  };


  const handleAddClick = async () => {
    try {
      const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
      const targetUrl = `https://api.nuz2le.com/api/family/${family_id}`;
      
      const response = await fetch(proxyUrl + targetUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          "Authorization":"Bearer eyJKV1QiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1dWlkIjoyLCJyb2xlIjoiVVNFUiIsImlhdCI6MTcyMzg5MzA2NCwiZXhwIjoxNzI0NDk3ODY0fQ.a1hl17fFj5bmo0fRLWli4vNQtZSeg2YZYxKhyFpR5xgjqRYW58T1svkabn76kEL_t0j4PsiX7USZ9YQ0cbA03g",
        },
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      console.log('가족 구성원:', data);
      navigate("/connect");
  
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  const handleNameBtnClick = () => {
    if (characterImage === "") {
      navigate("/keyword");
    } else {
      navigate("/ChaName");
    }
  };

  const handleBtnClick = () => {
    const nextImage = characterImages2[characterImage];
    if (nextImage && nextImage !== characterImage) {
      dispatch(setCharacterImage(nextImage));
      console.log(characterImage);
      setIsMoving(true); 

      setTimeout(() => {
        setIsMoving(false); 
        dispatch(resetCharacterImage());
      }, 5000);
    }
  };

  return (
    <HomePage>
      <AddButton
        src="src/assets/connect.png"
        onClick={handleAddClick}
      ></AddButton>
      {characterImage !== "" && (
        <MakeimgButton>
          <ImgButton src="/src/assets/msgimg.png"></ImgButton>
          <ImgButton src="/src/assets/conimg.png"></ImgButton>
          <ImgButton src="/src/assets/picimg.png"></ImgButton>
        </MakeimgButton>
      )}
      <ImageContainer>
        {characterImage !== "" && (
          <BackgroundImage
            src="src/assets/homeBackground.png"
            alt="Home Background"
          />
        )}
        {characterImage === "" ? (
          <FirstCharacterImage
            src="/src/assets/firstCha.png"
            onClick={handleChaClick}
          />
        ) : (
          <CharacterImage 
            src={characterImage} 
            alt="애착이"
            isMoving={isMoving} 
          />
        )}
      </ImageContainer>

      {name === "" ? (
        characterImage ? (
          <MakeNameButton
            style={{ bottom: "100px" }}
            onClick={handleNameBtnClick}
          >
            애착이 생성하기
          </MakeNameButton>
        ) : (
          <MakeNameButton
            style={{ bottom: "150px" }}
            onClick={handleNameBtnClick}
          >
            애착이 생성하기
          </MakeNameButton>
        )
      ) : (
        <MakeButton onClick={handleBtnClick}> 애착이 쓰다듬어주기 </MakeButton>
      )}
    </HomePage>
  );
};

const HomePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-color: #fcfdf5;
  position: relative;
`;

const AddButton = styled.img`
  cursor: pointer;
  position: absolute;
  left: 20px;
  top: 40px;
  z-index: 3;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 50%;
  margin-bottom: 100px;
`;

const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: -70px;
  z-index: 1;
`;

const CharacterImage = styled.img`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  z-index: 2;
  transition: top 0.5s ease;
  top: ${(props) => (props.isMoving ? "-100px" : "0px")}; // 애니메이션을 위한 조건부 스타일
`;

const FirstCharacterImage = styled.img`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  z-index: 2;
  top: 20px;
`;

const MakeNameButton = styled.button`
  background-color: #ffb1d0;
  border: none;
  cursor: pointer;
  border-radius: 30px;
  padding: 10px 35px;
  font-family: "Pretendard";
  font-size: 16px;
  width: 220px;
  height: 50px;
  text-align: center;
  font-weight: bold;
  position: absolute;
  z-index: 3;
`;
const MakeButton = styled.button`
  background-color: #353535;
  border: none;
  color: #ffffff;
  cursor: pointer;
  border-radius: 30px;
  padding: 10px 35px;
  font-family: "Pretendard";
  font-size: 16px;
  width: 220px;
  height: 50px;
  text-align: center;
  font-weight: bold;
  position: absolute;
  bottom: 100px;
  z-index: 3;
`;
const MakeimgButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #dfdfd2;
  border: none;
  border-radius: 30px;
  width: 178px;
  height: 50px;
  text-align: center;
  font-weight: bold;
  position: absolute;
  top: 40px;
  z-index: 3;
  padding: 0 10px;
  gap: 30px;
`;
const ImgButton = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export default Home;
