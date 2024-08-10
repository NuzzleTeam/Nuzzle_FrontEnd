import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import Footer from '../../components/Footer/Footer';
import { setColor } from '../../features/colorSlice';

const colors = ['#FFC0CB', '#ADD8E6', '#000000', '#8B4513']; // 핑크, 파랑, 검정, 갈색

const ChaColor = () => {
  const selectedColor = useSelector((state) => state.color.selectedColor);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleColorClick = (color) => {
    if (selectedColor === color) {
      dispatch(setColor(''));
    } else {
      dispatch(setColor(color));
    }
  };

  const handleSelectClick = () => {
    if (selectedColor) {
      navigate('/ChaMake1');
    }
  };

  return (
    <Container>
      <Title>애착이의 색상을 선택해보세요</Title>
      <Subtitle>색상은 수정이 불가능하니 신중하게 골라주세요!</Subtitle>
      <CharacterContainer color={selectedColor || '#808080'}>
        <EyeImage1 src="src/assets/eyes.png" alt="애착이" />
        <EyeImage2 src="src/assets/eyes.png" alt="애착이" />
      </CharacterContainer>
      <ColorOptions>
        {colors.map((color) => (
          <ColorButton
            key={color}
            color={color}
            isselected={selectedColor === color ? "true" : "false"}
            onClick={() => handleColorClick(color)}
          />
        ))}
      </ColorOptions>
      <SelectButton 
        disabled={!selectedColor} 
        onClick={handleSelectClick}
        isselected={selectedColor ? "true" : "false"}
      >
        선택하기
      </SelectButton>
      <Footer></Footer>
    </Container>
  );
};

export default ChaColor;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f8f8f8;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  color: pink;
  margin-bottom: 20px;
`;

const CharacterContainer = styled.div`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  position: relative;
`;

const EyeImage1 = styled.img`
  width: 10%;
  height: auto;
  object-fit: cover;
`;

const EyeImage2 = styled.img`
  width: 10%;
  height: auto;
  object-fit: cover;
 `;

const ColorOptions = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 300px;
  margin-bottom: 20px;
`;

const ColorButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: ${(props) => (props.isselected === "true" ? '3px solid black' : '3px solid transparent')};
  background-color: ${(props) => props.color};
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

const SelectButton = styled.button`
  background-color: ${(props) => (props.isselected === "true" ? '#FFC0CB' : '#ccc')};
  color: black;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 20px;
  margin-bottom: 20px;
  width: 30%;
  &:disabled {
    cursor: not-allowed;
  }
`;