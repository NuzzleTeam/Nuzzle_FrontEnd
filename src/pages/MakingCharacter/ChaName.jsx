import { useSelector, useDispatch } from 'react-redux';
import { setName, setModalOpen, setSavedName } from '../../features/nameSlice';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import styled from 'styled-components';

const ChaName = () => {
  const name = useSelector((state) => state.name.name);
  const modalOpen = useSelector((state) => state.name.modalOpen);
  const savedName = useSelector((state) => state.name.savedName);
  const characterImage = useSelector((state) => state.character.characterImage);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (event) => {
    dispatch(setName(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setModalOpen(true));
  };

  const handleModify = () => {
    dispatch(setModalOpen(false));
  };

  const handleConfirm = () => {
    dispatch(setSavedName(name));
    dispatch(setModalOpen(false));
    navigate('/ChaNameComplete');
  };

  return (
    <Container>
      <Content>
        <Title>{savedName ? `정말 멋진 아이디어 같아요!` : `아직 애착이의 애칭이 없네요.`}</Title>
        <Subtitle>
          {savedName 
            ? `${savedName}` 
            : '가족과 상의하여 이름을 정해주면 어떨까요?'}
        </Subtitle>
        <form onSubmit={handleSubmit}>
          <Input 
            type="text" 
            value={name} 
            onChange={handleChange} 
            placeholder="애착이 이름"
            hastext={name.length > 0 ? "true" : "false"}
          />
          <Subtitle>애칭은 수정이 불가능하니 신중하게 정해주세요!</Subtitle>
          <ImageContainer>
            <Image src={characterImage} alt="애착이" />
          </ImageContainer>
          <StyledButton type="submit">저장</StyledButton>
        </form>
      </Content>
      {modalOpen && (
        <ModalOverlay>
          <ModalContent>
            <p>정말 {name}로 지으실 건가요? 🤔</p>
            <ButtonGroup>
              <StyledButton onClick={handleModify}>수정하기</StyledButton>
              <StyledButton onClick={handleConfirm}>YES</StyledButton>
            </ButtonGroup>
          </ModalContent>
        </ModalOverlay>
      )}
      <Footer></Footer>
    </Container>
  );
};

export default ChaName;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f8f8f8;
  padding: 20px;
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

const Input = styled.input`
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 10px;
  width: 100%;
  max-width: 300px;
  background-color: ${props => (props.hastext === "true" ? '#ffcccb' : '#E6E6E6')};
`;

const ImageContainer = styled.div`
  margin: 20px 0;
`;

const Image = styled.img`
  width: 150px;
  height: auto;
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

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;