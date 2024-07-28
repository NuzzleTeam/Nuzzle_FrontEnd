import { useNavigate } from 'react-router-dom';
import { useSelector , useDispatch } from 'react-redux';
import { setCharacterImage, resetCharacterImage } from '../features/characterSlice';
import Footer from '../components/Footer/Footer';
import styled from 'styled-components';

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const characterImage = useSelector((state) => state.character.characterImage);
  const characterImages = useSelector((state) => state.character.characterImages);
  const name = useSelector((state) => state.name.name);

  const handleChaClick = () => {
    if (characterImage === '') {
      navigate('/Keyword');
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
    return characterImage || '/src/assets/firstCha.gif';
  };

  return (
    <Container>
      <CircleButton>+</CircleButton>
      <MainContent>
        <ImageContainer>
        {characterImage !== '' && <BackgroundImage src='src/assets/homeBackground.png' alt="Home Background" />}
          <CharacterImage src={getImageSrc()} alt="애착이" onClick={handleChaClick} />
        </ImageContainer>
        {name == '' && <StyledButton onClick={() => navigate('/ChaName')}>이름지어주기</StyledButton> }
        <p>
          {name}이와 함께하는 너즐의 기본적인 홈페이지입니다.
          이동하려면 네비게이션이나 화면을 클릭하세요
        </p>
      </MainContent>
      <Footer></Footer>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f8f8f8;
  padding: 20px;
`;

const CircleButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #ffcccb;
  color: black;
  border: none;
  outline: none;
  cursor: pointer;
  position: absolute;
  top: 25px;
  left: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  justify-content: center;
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

const ImageContainer = styled.div`
  position: relative;
  width: 500px;  
  height: 500px; 
`;

const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const CharacterImage = styled.img`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 50%; 
  cursor: pointer;
`;
