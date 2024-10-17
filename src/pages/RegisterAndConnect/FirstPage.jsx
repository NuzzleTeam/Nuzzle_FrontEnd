import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import upsideNuzzle from "/src/assets/img/upside_nuzzle.png";
import nuzzle from "/src/assets/img/nuzzle.png";
import mainCharacter from "/src/assets/img/main_character.png";

// 사이트 접속 페이지 (첫 화면)

function FirstPage() {
  const navigate = useNavigate();
  const startNuzzle = () => {
    navigate("/login");
  };

  return (
    <PageWrapper>
      <ContentWrapper>
        <Top>
          <img
            width={"64px"}
            height={"35px"}
            src={upsideNuzzle}
          />
          <img
            width={"69.11px"}
            height={"12px"}
            src={nuzzle}
          />
        </Top>
        <Middle>
          <Bubble>하루 한 번, 우리 가족 일상 엿보기</Bubble>
          <ChaImg src={mainCharacter}></ChaImg>
        </Middle>
        <Bottom>
          <StartBtn onClick={startNuzzle}>너즐 시작하기</StartBtn>
        </Bottom>
      </ContentWrapper>
    </PageWrapper>
  );
}

export default FirstPage;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  width: 100%;
  background-color: #fcfdf5;
`;

const ContentWrapper = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: -50px;
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7px;
  padding-top: 80px;
`;

const Middle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;
  padding-top: 0px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: center;
`;

const ChaImg = styled.img`
  display: flex;
  margin-left: 30px;
`;

const StartBtn = styled.button`
  width: 315px;
  height: 60px;
  border-radius: 12px;
  border: none;
  padding: 21px 11px;
  background-color: #ffb1d0;
  font-family: "Pretendard";
  font-weight: 600;
  font-size: 16px;
  line-height: 19.2px;
  position: absolute;
  bottom: 50px;
`;

const Bubble = styled.div`
  position: relative;
  width: 222px;
  height: 40px;
  border-radius: 30px;
  background-color: #353535;
  color: #ffb1d0;
  font-family: "Pretendard";
  font-weight: 700;
  font-size: 12px;
  line-height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;

  &:after {
    content: "";
    position: absolute;
    border-style: solid;
    border-width: 16px 10px 0;
    border-color: #353535 transparent;
    display: block;
    width: 0;
    z-index: 1;
    bottom: -14px;
    left: calc(50% - 10px);
  }
`;
