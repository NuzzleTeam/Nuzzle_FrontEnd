import { useSelector, useDispatch } from 'react-redux';
import { setCharacterImage } from '../../features/characterSlice';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';



const ChaComplete = () => {
  const characterImage = useSelector((state) => state.character.characterImage);
  const navigate = useNavigate();


  return (
    <Container>
      <SpeechBubble>
        만나서 반가워요! <br></br> 행복한 시간을 보낼 수 있게<br></br> 제가 도와드릴게요!
      </SpeechBubble>
      <Content>
        <CharacterSpotlight src='/src/assets/Union.png'></CharacterSpotlight>
          <CharacterImage 
            src={characterImage} 
            alt="character" 
          />
      </Content>
      <SelectButton onClick={() => navigate('/')}>거실로 돌아가기</SelectButton>
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
  z-index: 2;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  font-size: 20px;
  font-family: 'Pretendard';
  font-weight : bold; 
  top:150px;

  &:after {
    content: '';
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
  top:-120px;
  z-index: 1;
`;

const CharacterImage = styled.img`
  width: 90%;
  z-index: 2;
  margin-top: 150px;
`;

const SelectButton = styled.button`
  background-color: #FFB1D0;
  color: black;
  border: none;
  padding: 10px 30px;
  cursor: pointer;
  font-size: 16px;
  font-family: 'Pretendard';
  font-weight : bold; 
  border-radius: 50px;
  width:220px;
  height:50px;
  bottom: 50px;
  z-index: 2;
  position : fixed;
`;