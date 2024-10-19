import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Union from "/src/assets/Union.png";
import stars from "/src/assets/stars.png";
import pinkrabbit from "/src/assets/chaMake/pinkrabbit.gif"
import blackrabbit from "/src/assets/chaMake/blackrabbit.gif"
import bluerabbit from "/src/assets/chaMake/bluerabbit.gif"
import brownrabbit from "/src/assets/chaMake/brownrabbit.gif"
import pinkcat from "/src/assets/chaMake/pinkcat.gif"
import bluecat from "/src/assets/chaMake/bluecat.gif"
import blackcat from "/src/assets/chaMake/blackcat.gif"
import browncat from "/src/assets/chaMake/browncat.gif"
import pinkbear from "/src/assets/chaMake/pinkbear.gif"
import bluebear from "/src/assets/chaMake/bluebear.gif"
import blackbear from "/src/assets/chaMake/blackbear.gif"
import brownbear from "/src/assets/chaMake/brownbear.gif"



const ChaComplete = () => {
  const characterImage = useSelector((state) => state.character.characterImage);
  const navigate = useNavigate();
  console.log(characterImage);
  return (
    <Container>
      <SpeechBubble>
        만나서 반가워요! <br></br> 행복한 시간을 보낼 수 있게<br></br> 제가
        도와드릴게요!
      </SpeechBubble>
      <Content>
        <CharacterSpotlight src={Union}></CharacterSpotlight>
        <CharacterStarImage src={stars}></CharacterStarImage>
        <CharacterImage src={characterImage} alt="character" />
      </Content>
      <SelectButton onClick={() => navigate("/")}>거실로 돌아가기</SelectButton>
    </Container>
  );
};

export default ChaComplete;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #353535;
  position: relative;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-top: 60px;
`;

const SpeechBubble = styled.div`
  background: #fff;
  border-radius: 70px;
  padding: 30px 20px;
  position: fixed;
  top: 210px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  width: 284px;
  z-index: 4;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  font-size: 20px;
  font-family: "Pretendard";
  font-weight: bold;
  top: 150px;

  &:after {
    content: "";
    position: absolute;
    bottom: -19px; /* 말풍선 꼬리의 위치 */
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-top: 20px solid #fff;
  }
`;

const CharacterSpotlight = styled.img`
  width: 380px;
  height: 762px;
  position: absolute;
  top: -120px;
  z-index: 1;
`;

const CharacterImage = styled.img`
  width: 90%;
  z-index: 2;
  margin-top: 150px;
`;
const CharacterStarImage = styled.img`
  width: 90%;
  position: absolute;
  z-index: 3;
  margin-top: 40px;
`;

const SelectButton = styled.button`
  background-color: #ffb1d0;
  color: black;
  border: none;
  padding: 10px 30px;
  cursor: pointer;
  font-size: 16px;
  font-family: "Pretendard";
  font-weight: bold;
  border-radius: 50px;
  width: 220px;
  height: 50px;
  bottom: 50px;
  z-index: 2;
  position: fixed;
`;
