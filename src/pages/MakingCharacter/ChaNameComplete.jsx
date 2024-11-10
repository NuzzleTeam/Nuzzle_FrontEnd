import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const characterImages = {
  // namecomplete 화면에서 사용하는 key value
  "/src/assets/chaMake/pinkrabbit.gif": "/src/assets/chaHome/pinkrabbit3.gif",
  "/src/assets/chaMake/blackrabbit.gif": "/src/assets/chaHome/blackrabbit3.gif",
  "/src/assets/chaMake/bluerabbit.gif": "/src/assets/chaHome/bluerabbit3.gif",
  "/src/assets/chaMake/brownrabbit.gif": "/src/assets/chaHome/brownrabbit3.gif",
  "/src/assets/chaMake/pinkcat.gif": "/src/assets/chaHome/pinkcat3.gif",
  "/src/assets/chaMake/bluecat.gif": "/src/assets/chaHome/bluecat3.gif",
  "/src/assets/chaMake/blackcat.gif": "/src/assets/chaHome/blackcat3.gif",
  "/src/assets/chaMake/browncat.gif": "/src/assets/chaHome/browncat3.gif",
  "/src/assets/chaMake/pinkbear.gif": "/src/assets/chaHome/pinkbear3.gif",
  "/src/assets/chaMake/bluebear.gif": "/src/assets/chaHome/bluebear3.gif",
  "/src/assets/chaMake/blackbear.gif": "/src/assets/chaHome/blackbear3.gif",
  "/src/assets/chaMake/brownbear.gif": "/src/assets/chaHome/brownbear3.gif",
};

const ChaNameComplete = () => {
  const navigate = useNavigate();
  const characterImage = useSelector((state) => state.character.characterImage);
  //const characterImages = useSelector(
  //  (state) => state.character.characterImages
  //);
  const savedName = useSelector((state) => state.name.savedName);

  return (
    <Container>
      <Title>
        {savedName}!! 애칭을 마음에 들어하는 눈치네요! <br />
        {savedName}! 우리 가족을 잘 부탁해~
      </Title>
      <CharacterImage src={characterImages[characterImage]} alt="애착이" />
      <StyledButton onClick={() => navigate("/chaComplete")}>
        완료하기
      </StyledButton>
    </Container>
  );
};

export default ChaNameComplete;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  width: 100%;
  background-color: #fcfdf5;
  position: relative;
  padding: 20px;
`;

const Title = styled.div`
  font-size: 20px;
  font-family: "Pretendard";
  font-weight: bold;
  text-align: center;
  z-index: 3;
  margin-top: 30px;
`;

const CharacterImage = styled.img`
  position: absolute;
  top: 0;
  width: 450px;
  height: auto;
  z-index: 1;
  margin-left: 20px;
`;

const StyledButton = styled.button`
  background-color: #ffb1d0;
  color: black;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 20px;
  font-size: 16px;
  font-family: "Pretendard";
  font-weight: bold;
  width: 205px;
  height: 50px;
  align-self: center;
  z-index: 2;
  margin-top: 550px;
`;
