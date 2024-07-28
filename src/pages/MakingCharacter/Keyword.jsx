import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setShowAll, setSelectedKeywords, setShowWarning } from '../../features/keywordSlice';
import styled from 'styled-components';

const Keyword = () => {
  const allKeywords = [
    "#짱친", "#조용한", "#조금어색", "#주말가족", "#사랑꾼", "#시끌벅적", "#외식러버", "#사춘기",
    "#너무달라", "#쌍둥이", "#♡", "#딸부자", "#요리왕", "#아빠짱", "#핵가족", "#대가족", "#늦둥이", "#엄마짱"
  ];

  const maxKeywords = 5; // 최대 선택 가능한 키워드 수
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
      <BackButton onClick={() => window.history.back()}>&lt;</BackButton>
      <Title>우리 가족을 키워드로 표현해주세요</Title>
      <Subtitle>키워드는 애착 인형 생성에 활용되며, 5개까지 선택할 수 있습니다.</Subtitle>
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
        <WarningMessage>최대 선택 개수를 초과했어요!</WarningMessage>
      )}
      <Tip>키워드를 많이 선택할수록 우리가족의 애착인형이 달라질 수 있어요!</Tip>
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
  background-color: #f8f8f8;
  height: 100vh;
  padding: 20px;
  position: relative;
`;

const BackButton = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

const Title = styled.h2`
  margin: 100px 0 10px;
  text-align: center;
`;

const Subtitle = styled.p`
  margin: 0 0 20px;
  text-align: center;
  color: #777;
`;

const KeywordGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-bottom: 20px;
`;

const KeywordButton = styled.button`
  background-color: ${props => (props.selected ? '#ffcccb' : '#e0e0e0')};
  color: black;
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 4px;
  font-size: 14px;
  text-align: center;
`;

const WarningMessage = styled.p`
  color: red;
  margin-bottom: 20px;
`;

const Tip = styled.p`
  background-color: #fff5f5;
  border: 1px solid #ffc0cb;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 20px;
  text-align: center;
  font-size: 12px;
`;

const NextButton = styled.button`
  background-color: ${props => (props.active === "true" ? '#ffcccb' : '#e0e0e0')};
  color: black;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  margin-top: 20px;
  border-radius: 4px;
  font-size: 16px;
  pointer-events: ${props => (props.disabled ? 'none' : 'auto')};
`;
