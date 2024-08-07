import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  setCharacterImage,
  resetCharacterImage,
} from "../../features/characterSlice";
import styled from "styled-components";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const characterImage = useSelector((state) => state.character.characterImage);
  const characterImages = useSelector(
    (state) => state.character.characterImages
  );
  const name = useSelector((state) => state.name.name);

  const handleChaClick = () => {
    if (characterImage === "") {
      navigate("/Keyword");
    } else {
      const nextImage = characterImages[characterImage]; // key  value 값 사용해서 업데이트 하기 때문에 눈 반짝일 때 클릭하면 초기 이미지로 넘어가버리는 걸 방지
      if (nextImage && nextImage !== characterImage) {
        dispatch(setCharacterImage(nextImage));
        setTimeout(() => {
          dispatch(resetCharacterImage());
        }, 3000);
      }
    }
  };

  const getImageSrc = () => {
    return characterImage || "/src/assets/firstCha.gif";
  };

  return (
    <HomePage>
      <AddButton>+</AddButton>
      <ImageContainer>
        {characterImage !== "" && (
          <BackgroundImage
            src="src/assets/homeBackground.png"
            alt="Home Background"
          />
        )}
        <CharacterImage
          src={getImageSrc()}
          alt="애착이"
          onClick={handleChaClick}
        />
      </ImageContainer>
      {name === "" && (
        <MakeNameButton onClick={() => navigate("/ChaName")}>
          애착이 이름지어주기
        </MakeNameButton>
      )}
    </HomePage>
  );
};

const HomePage = styled.div`
  padding: 1rem;
  width: 100%;
  display: flex;
`;

const AddButton = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #ffcccb;
  color: black;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
`;

const MakeNameButton = styled.button`
  background-color: #ffcccb;
  color: black;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  margin-top: 20px;
  border-radius: 10px;
  font-size: 16px;
`;

const ImageContainer = styled.div`
  // position: absolute;
  width: 500px;
  height: 500px;
`;

const BackgroundImage = styled.img`
  // position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const CharacterImage = styled.img`
  // position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 50%;
  cursor: pointer;
`;

export default Home;
