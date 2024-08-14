import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import styled from 'styled-components';

const ChaNameComplete = () => {
  const navigate = useNavigate();
  const characterImage = useSelector((state) => state.character.characterImage);
  const characterImages2 = useSelector((state) => state.character.characterImages2);
  const savedName = useSelector((state) => state.name.savedName);
  return (
    <Container>
        <Title>{savedName}!! 애칭을 마음에 들어하는 눈치네요! <br />
          {savedName}! 우리 가족을 잘 부탁해~</Title>
        <CharacterImage src={characterImages2[characterImage]} alt="애착이" />
        <StyledButton onClick={() => navigate('/')}>완료하기</StyledButton>
      <Footer></Footer>
    </Container>
  );
};

export default ChaNameComplete;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #FCFDF5;
  padding: 20px;
  position: relative;
`;


const Title = styled.h1`
  font-size: 18px;
  margin-bottom: 10px;
  padding: 10px;
`;


const CharacterImage = styled.img`
  width: 270px;
  height: auto;
`;

const StyledButton = styled.button`
  background-color: #ffcccb;
  color: black;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  margin-top: 20px;
  border-radius: 20px;
  font-size: 16px;
  width: 30%;
`;