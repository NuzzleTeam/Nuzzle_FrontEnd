import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  setShowAll,
  setSelectedKeywords,
  setShowWarning,
} from "../../features/keywordSlice";
import styled from "styled-components";

const Keyword = () => {
  const allKeywordsWithIds = [
    { id: 1, keyword: "짱친" },
    { id: 2, keyword: "조용한" },
    { id: 3, keyword: "조금은 어색한" },
    { id: 4, keyword: "주말 가족" },
    { id: 5, keyword: "시끌벅적" },
    { id: 6, keyword: "외식러버" },
    { id: 7, keyword: "너무 다른" },
    { id: 8, keyword: "아직도 사춘기" },
    { id: 9, keyword: "여행 가족" },
    { id: 10, keyword: "쌍둥이" },
    { id: 11, keyword: "♡" },
    { id: 12, keyword: "딸부자" },
    { id: 13, keyword: "요리왕" },
    { id: 14, keyword: "아빠짱" },
    { id: 15, keyword: "핵가족" },
    { id: 16, keyword: "대가족" },
    { id: 17, keyword: "늦둥이" },
    { id: 18, keyword: "엄마짱" },
    { id: 19, keyword: "사랑꾼" },
    { id: 20, keyword: "자주 못 보는" },
  ];

  const maxKeywords = 5;
  const showAll = useSelector((state) => state.keyword.showAll);
  const selectedKeywords = useSelector(
    (state) => state.keyword.selectedKeywords
  );
  const showWarning = useSelector((state) => state.keyword.showWarning);
  const familyId = useSelector((state) => state.user.familyId);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleKeywordClick = (keyword) => {
    if (selectedKeywords.includes(keyword)) {
      dispatch(
        setSelectedKeywords(selectedKeywords.filter((kw) => kw !== keyword))
      );
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
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const targetUrl = "https://api.nuz2le.com/api/family-keywords/add-multiple";

    // 선택된 키워드와 ID 매핑
    const selectedKeywordsWithIds = allKeywordsWithIds
      .filter((kw) => selectedKeywords.includes(kw.keyword))
      .map((kw) => ({
        id: kw.id,
        keyword: kw.keyword
      }));

    const requestBody = {
      familyId,
      keywords: selectedKeywordsWithIds, // ID와 함께 키워드 전송
    };

    fetch(proxyUrl + targetUrl, {
      method: "POST",
      headers:{
        "Authorization":"Bearer eyJKV1QiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1dWlkIjoyLCJyb2xlIjoiVVNFUiIsImlhdCI6MTcyMzg5MzA2NCwiZXhwIjoxNzI0NDk3ODY0fQ.a1hl17fFj5bmo0fRLWli4vNQtZSeg2YZYxKhyFpR5xgjqRYW58T1svkabn76kEL_t0j4PsiX7USZ9YQ0cbA03g"
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("서버 응답:", data);
        navigate("/ChaMake1"); // 요청이 성공하면 로딩페이지 이동
      })
      .catch((error) => {
        console.log(requestBody);
        console.error("Error:", error);
        navigate("/ChaMake1"); // 요청이 성공하면 로딩페이지 이동

      });
  };

  return (
    <Container>
      <Content>
        <ProgressBar>
          <InnerProgreeBar />
          <InnerProgreeBar />
          <InnerProgreeBar style={{ backgroundColor: "#FFB1D0" }} />
        </ProgressBar>
        <Title>우리 가족을 키워드로 표현해주세요</Title>
        <Subtitle>애착 인형 생성에 활용됩니다. </Subtitle>
        <KeywordGrid>
          {(showAll ? allKeywordsWithIds : allKeywordsWithIds.slice(0, 10)).map(
            (kw, index) => (
              <KeywordButton
                key={index}
                selected={selectedKeywords.includes(kw.keyword)}
                onClick={() => handleKeywordClick(kw.keyword)}
              >
                {kw.keyword}
              </KeywordButton>
            )
          )}
          {!showAll && (
            <KeywordButton onClick={handleShowAllClick}>+</KeywordButton>
          )}
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
        disabled={
          selectedKeywords.length === 0 || selectedKeywords.length > maxKeywords
        }
        active={
          selectedKeywords.length > 0 && selectedKeywords.length <= maxKeywords
            ? "true"
            : "false"
        }
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
  background-color: #fcfdf5;
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
  font-family: "Pretendard";
  font-weight: bold;
  margin-top: 20px;
`;

const Subtitle = styled.p`
  text-align: center;
  font-size: 12px;
  color: #000000;
  font-family: "Pretendard";
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
  background-color: ${(props) => (props.selected ? "#ffb1d0" : "#f3f3f3")};
  color: ${(props) => (props.selected ? "#000000" : "#717171")};
  border: none;
  padding: 10px 16px;
  cursor: pointer;
  border-radius: 15px;
  font-family: "Pretendard";
  font-size: 14px;
  text-align: center;
  font-weight: ${(props) => (props.selected ? "bold" : "normal")};
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
  font-family: "Pretendard";
`;

const Tip = styled.p`
  background-color: #ffb1d0;
  border: none;
  border-radius: 30px;
  position: absolute;
  top: -55px;
  left: 10px;
  font-family: "Pretendard";
  font-weight: bold;
  width: 61px;
  height: 32.66px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid #ffb1d0;
  }
`;

const TipBox = styled.div`
  background-color: #fcfdf5;
  border: 2px dashed #353535;
  width: 258px;
  height: 57.5px;
  border-radius: 30px;
  font-family: "Pretendard";
  font-weight: bold;
  font-size: 12px;
  position: relative;
  padding: 1px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NextButton = styled.button`
  background-color: ${(props) =>
    props.active === "true" ? "#ffb1d0" : "#f3f3f3"};
  color: black;
  border: none;
  width: 315px;
  height: 50px;
  font-family: "Pretendard";
  font-weight: bold;
  cursor: pointer;
  border-radius: 30px;
  font-size: 16px;
  margin: 20px 0;
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
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
  background-color: #d9d9d9;
`;
