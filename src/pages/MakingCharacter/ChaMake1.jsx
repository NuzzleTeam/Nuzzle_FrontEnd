import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const ChaMake1 = () => {
  const navigate = useNavigate();
  const selectedColor = useSelector((state) => state.color.selectedColor);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (selectedColor != '') {
        navigate('/ChaComplete', { state: { selectedColor } });
      } else {
        navigate('/ChaColor');
      }
    }, 3000);

    return () => clearTimeout(timeout);
  }, [selectedColor, navigate]);

  return (
    <Container>
      {selectedColor ? <CharacterImage src="src/assets/make1.png" alt="애착이변신1" /> : <CharacterImage src="src/assets/make2.png" alt="애착이 변신2" />}
      <CharacterColor color={selectedColor} />
    </Container>
  );
};

export default ChaMake1;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(to bottom, pink, yellow);
`;


const CharacterColor = styled.div`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  animation: spin 4s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const CharacterImage = styled.img`
  width: 350px;
  height: auto;
  object-fit: cover;
`;