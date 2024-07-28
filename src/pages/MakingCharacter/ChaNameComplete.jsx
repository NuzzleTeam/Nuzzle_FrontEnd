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
      <Content>
        <Title>{savedName}!! 애칭을 마음에 들어하는 눈치네요!</Title>
        <Subtitle>{savedName}! 우리 가족을 잘 부탁해~</Subtitle>
        <CharacterImage src={characterImages2[characterImage]} alt="애착이" />
        <StyledButton onClick={() => navigate('/')}>완료하기</StyledButton>
      </Content>
      <Footer></Footer>
    </Container>
  );
};

export default ChaNameComplete;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  background-color: #f8f8f8;
  padding: 20px;
`;

const Content = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  font-size: 18px;
  margin-bottom: 10px;
  padding: 10px;
`;

const Subtitle = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
  padding: 10px;
`;

const CharacterImage = styled.img`
  width: 150px;
  height: auto;
  margin-bottom: 20px;
`;

const StyledButton = styled.button`
  background-color: #ffcccb;
  color: black;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  margin-top: 20px;
  border-radius: 10px;
  font-size: 16px;
`;
