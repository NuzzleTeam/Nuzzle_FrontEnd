import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const ChaNoName = () => {  const navigate = useNavigate();

  const goKeyword = () => {
    navigate('/keyword');
  };

  return (
    <Container>
      <Content>
        <Title> 아직 애착이가 없네요.</Title>
        <Subtitle>
          아래 버튼을 눌러 애착이를 생성하세요!!
        </Subtitle>
          <StyledButton onClick={goKeyword}> 애착이 생성하기 </StyledButton>
      </Content>
    </Container>
  );
};

export default ChaNoName;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width : 100%;
  background-color: #FCFDF5;
  position: relative;
`;

const Content = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
  color: #777;
`;



const StyledButton = styled.button`
  background-color: #ffcccb;
  color: black;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  margin-top: 10px;
  border-radius: 4px;
`;