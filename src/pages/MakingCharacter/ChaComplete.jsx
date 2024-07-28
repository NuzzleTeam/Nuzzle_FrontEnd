import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCharacterImage } from '../../features/characterSlice';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// 캐릭터 이미지 경로 설정 여기서 랜덤 부여
const characterImages = {
  '#FFC0CB': {
    rabbit: '/src/assets/chaMake/pinkrabbit.gif',
    cat: '/src/assets/chaMake/pinkcat.gif',
    bear: '/src/assets/chaMake/pinkbear.gif',
  },
  '#ADD8E6': {
    rabbit: '/src/assets/chaMake/bluerabbit.gif',
    cat: '/src/assets/chaMake/bluecat.gif',
    bear: '/src/assets/chaMake/bluebear.gif',
  },
  '#000000': {
    rabbit: '/src/assets/chaMake/blackrabbit.gif',
    cat: '/src/assets/chaMake/blackcat.gif',
    bear: '/src/assets/chaMake/blackbear.gif',
  },
  '#8B4513': {
    rabbit: '/src/assets/chaMake/brownrabbit.gif',
    cat: '/src/assets/chaMake/browncat.gif',
    bear: '/src/assets/chaMake/brownbear.gif',
  },
};

const ChaComplete = () => {
  const selectedColor = useSelector((state) => state.color.selectedColor);
  const characterImage = useSelector((state) => state.character.characterImage);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedColor && characterImages[selectedColor]) {
      const characters = Object.keys(characterImages[selectedColor]);
      const randomCharacter = characters[Math.floor(Math.random() * characters.length)];
      dispatch(setCharacterImage(characterImages[selectedColor][randomCharacter]));
    } else {
      navigate('/');
    }
  }, [selectedColor]); // 수정해야하나

  return (
    <Container>
      <Content>
        <SpeechBubble>
          만나서 반가워요! 행복한 시간을 보낼 수 있게 제가 도와드릴게요!
        </SpeechBubble>
        <CharacterSpotlight>
          <CharacterImage 
            src={characterImage} 
            alt="character" 
          />
        </CharacterSpotlight>
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
  background-color: #000000;
  padding: 20px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SpeechBubble = styled.div`
  background: #fff;
  border-radius: 20px;
  padding: 15px 20px;
  margin-bottom: 20px;
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  max-width: 300px;
  z-index: 1;
`;

const CharacterSpotlight = styled.div`
  width: 200px;
  height: 300px;
  background: #ffd700;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const CharacterImage = styled.img`
  width: 100%;
  height: auto;
`;

const SelectButton = styled.button`
  background-color: #FFC0CB;
  color: black;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 4px;
  margin-top: 20px;
`;
