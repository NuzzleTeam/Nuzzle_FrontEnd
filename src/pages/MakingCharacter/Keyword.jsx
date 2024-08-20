import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setShowAll, setSelectedKeywords, setShowWarning } from '../../features/keywordSlice';
import styled from 'styled-components';

const Keyword = () => {
  const allKeywords = [
    "짱친", "조용한", "조금은 어색한", "주말 가족", "시끌벅적", "외식러버","너무 다른","아직도 사춘기",
    "여행 가족", "쌍둥이", "♡", "딸부자", "요리왕", "아빠짱", "핵가족", "대가족", "늦둥이", "엄마짱", "사랑꾼","자주 못 보는"
  ];

  const maxKeywords = 5;
  const showAll = useSelector((state) => state.keyword.showAll);
  const selectedKeywords = useSelector((state) => state.keyword.selectedKeywords);
  const showWarning = useSelector((state) => state.keyword.showWarning);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleKeywordClick = (keyword) => {
    if (selectedKeywords.includes(keyword)) {
      dispatch(setSelectedKeywords(selectedKeywords.filter(kw => kw !== keyword)));
      dispatch(setShowWarning(false));
    } else {
      if (selectedKeywords.length >= maxKeywords) {
        dispatch(setShowWarning(true));
        setTimeout(() => {
          dispatch(setShowWarning(false));
        }, 3000);
      } else {
        dispatch(setSelectedKeywords([...selectedKeywords, keyword]));
        dispatch(setShowWarning(false));
      }
    }
  };

  const handleShowAllClick = () => {
    dispatch(setShowAll(true));
  };

  const handleNextClick = () => {
    navigate('/ChaMake1');
  };

  return (
    <Container>
      <Content>
        <ProgressBar>
          <InnerProgreeBar/><InnerProgreeBar/><InnerProgreeBar style={{backgroundColor: '#FFB1D0'}}/>
        </ProgressBar>
        <Title>우리 가족을 키워드로 표현해주세요</Title>
        <Subtitle>애착 인형 생성에 활용됩니다. </Subtitle>
        <KeywordGrid>
          {(showAll ? allKeywords : allKeywords.slice(0, 10)).map((keyword, index) => (
            <KeywordButton
              key={index}
              selected={selectedKeywords.includes(keyword)}
              onClick={() => handleKeywordClick(keyword)}
            >
              {keyword} 
            </KeywordButton>
          ))}
          {!showAll && <KeywordButton onClick={handleShowAllClick}>+</KeywordButton>}
        </KeywordGrid>
        {showWarning && (
          <WarningMessage>🚨최대 선택 개수를 초과했어요!</WarningMessage>
        )}
      </Content>
      <TipBox>
        <Tip>Tip!</Tip>
        키워드를 많이 선택할수록 우리가족의 찰떡콩떡 애착이를 만날 수 있어요!
      </TipBox>
      <NextButton 
        disabled={selectedKeywords.length === 0 || selectedKeywords.length > maxKeywords}
        active={selectedKeywords.length > 0 && selectedKeywords.length <= maxKeywords ? "true" : "false"}
        onClick={handleNextClick}
      >
        다음
      </NextButton>
    </Container>
  );
};

export default Keyword;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 70vh;
  width: 100%;
  background-color: #FCFDF5;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Title = styled.div`
  width: 350px;
  height: 24px;
  text-align: center;
  font-size: 20px;
  font-family: 'Pretendard';
  font-weight: bold;
  margin-top: 20px;
`;

const Subtitle = styled.p`
  text-align: center;
  font-size: 12px;
  color: #000000;
  font-family: 'Pretendard';
`;

const KeywordGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3px;
  justify-content: center;
  margin-bottom: 20px;
  padding: 0 20px;
`;

const KeywordButton = styled.button`
  background-color: ${props => (props.selected ? '#ffb1d0' : '#f3f3f3')};
  color: ${props => (props.selected ? '#000000' : '#717171')};
  border: none;
  padding: 10px 16px;  
  cursor: pointer;
  border-radius: 15px;
  font-family: 'Pretendard';
  font-size: 14px; 
  text-align: center;
  font-weight: ${props => (props.selected ? 'bold' : 'normal')};
  margin: 4px; 
  flex: 0 1 auto; 
  min-width: 60px; 
  white-space: nowrap;
  overflow: visible; 
`;
const WarningMessage = styled.p`
  background-color: #ffe6f0;
  border: 1px solid #ff87b7;
  padding: 10px;
  border-radius: 15px;
  margin-bottom: 20px;
  text-align: center;
  font-size: 12px;
  font-family: 'Pretendard';
`;

const Tip = styled.p`
  background-color: #FFB1D0;
  border: none;
  border-radius: 30px;
  position: absolute;
  top: -55px;
  left: 10px;
  font-family: 'Pretendard';
  font-weight : bold; 
  width:61px;
  height:32.66px;
  display: flex; 
  justify-content: center; 
  align-items: center; 
  text-align: center; 
  

  &::after {
    content: '';
    position: absolute;
    bottom: -5px; 
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid #FFB1D0; 
  }
`;

const TipBox = styled.div`
  background-color: #FCFDF5;
  border: 2px dashed #353535;
  width: 258px;
  height: 57.5px;
  border-radius: 30px;
  font-family: 'Pretendard';
  font-weight : bold; 
  font-size: 12px;
  position: relative;
  padding: 1px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NextButton = styled.button`
  background-color: ${props => (props.active === "true" ? '#ffb1d0' : '#f3f3f3')};
  color: black;
  border: none;
  width: 315px;
  height: 50px;
  font-family: 'Pretendard';
  font-weight : bold; 
  cursor: pointer;
  border-radius: 30px;
  font-size: 16px;
  margin: 20px 0;
  pointer-events: ${props => (props.disabled ? 'none' : 'auto')};
`;

const ProgressBar = styled.div`
  width: 229px;
  height: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const InnerProgreeBar = styled.div`
  width: 76.33px;
  height: 6px;
  background-color: #D9D9D9;
`;