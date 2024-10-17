import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import completeImg from "/src/assets/img/connect_complete.png"

// 가족 연결 완료 페이지

function ConnectComplete() {
  const navigate = useNavigate();

  const goToConnect = () => {
    navigate("/connect");
  };

  const goToHome = () => {
    navigate("/");
  };
  return (
    <>
      <ConnectWrapper>
        <ConnectContentWrapper>
          <Top>
            <ProgressBar>
              <InnerProgreeBar />
              <InnerProgreeBar style={{ backgroundColor: "#FFB1D0" }} />
              <InnerProgreeBar />
            </ProgressBar>
          </Top>
          <Title>
            <span>_____님과 </span>
            <span>가족 연결이 완료됐습니다!</span>
          </Title>
          <Img src={completeImg}></Img>
          <ConnectBtnWrapper>
            <AddBtn onClick={goToConnect}>가족 추가하기</AddBtn>
            <CompleteBtn onClick={goToHome}>우리 가족 완성!</CompleteBtn>
          </ConnectBtnWrapper>
        </ConnectContentWrapper>
      </ConnectWrapper>
    </>
  );
}

export default ConnectComplete;

const ConnectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-color: #fcfdf5;
`;

const ConnectContentWrapper = styled.div`
  width: 348px;
  height: 90%;
  top: 50%;
  left: 50%;
  transform: translate(3.8%, -6%);
`;

const Top = styled.div`
  display: flex;
  top: 50%;
  left: 50%;
  transform: translate(0%, 2%);
`;

const ProgressBar = styled.div`
  width: 229px;
  height: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(5%, 550%);
  margin-left: 55px;
`;

const InnerProgreeBar = styled.div`
  width: 76.33px;
  height: 6px;
  background-color: #d9d9d9;
`;

const Title = styled.div`
  text-align: center;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  top: 50%;
  left: 50%;
  transform: translate(0%, 100%);
  display: flex;
  flex-direction: column;
  gap: 15px;
  font-family: "Pretendard";
  margin-bottom: -30px;
`;

const Img = styled.img`
  width: 380px;
  height: 220px;
  top: 50%;
  left: 50%;
  transform: translate(-4%, 80%);
  margin-left: 7px;
`;

const ConnectBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  top: 50%;
  left: 50%;
  gap: 10px;
  transform: translate(7.5%, 200%);
`;

const AddBtn = styled.button`
  width: 315px;
  height: 50px;
  border-radius: 100px;
  background-color: #ffb1d0;
  top: 50%;
  left: 50%;
  transform: translate(0%, 200%);
  font-weight: 700;
  font-size: 14px;
  line-height: 16.8px;
  border: none;
  font-family: "Pretendard";
`;

const CompleteBtn = styled.button`
  width: 315px;
  height: 50px;
  border-radius: 100px;
  background-color: #ffb1d0;
  top: 50%;
  left: 50%;
  transform: translate(0%, 200%);
  font-weight: 700;
  font-size: 14px;
  line-height: 16.8px;
  border: none;
  font-family: "Pretendard";
`;
