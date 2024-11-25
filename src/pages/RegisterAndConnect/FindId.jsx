import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import confirmTimer from "../../hooks/confirmTimer";

function FindId() {
  const navigate = useNavigate();
  const [showErrMsg, setShowErrMsg] = useState(false); // 에러 메시지 상태 추가

  const backToLogin = () => {
    navigate("/login");
  };

  const {
    phoneNumber,
    verificationCode,
    verificationStatus,
    timer,
    btnColor,
    phoneNumberDisabled,
    handleChange,
    sendVerification,
    resendVerification,
    verifyCode,
    formatTime,
    handleVerificationCodeChange,
  } = confirmTimer();

  // 인증 완료 버튼 로직
  const handleVerifyCode = () => {
    const isVerified = verifyCode(); // 기존의 인증 로직 호출
    setShowErrMsg(!isVerified); // 인증 실패 시 에러 메시지 표시
  };

  return (
    <>
      <PageWrapper>
        <ContentWrapper>
          <Title>
            아이디 찾기
          </Title>
          <Letter>
            휴대폰 번호
          </Letter>
          <ConfirmBox>
            <PhoneNumber
              placeholder="01012345678"
              type="text"
              onChange={handleChange}
              fontFamily={"Pretendard"}
            />
            <ConfirmBtn
              onClick={
                !verificationStatus.sent ? sendVerification : resendVerification
              }
              disabled={phoneNumberDisabled}
            >
              {!verificationStatus.sent ? "인증받기" : "재전송"}
            </ConfirmBtn>
          </ConfirmBox>
          <Letter>
            인증번호
          </Letter>
          <ConfirmBox>
            <ConfirmNumber
              placeholder="인증번호 4자리"
              value={verificationCode}
              onChange={handleVerificationCodeChange}
            />
          </ConfirmBox>
          {/* 인증번호 불일치 시 에러 메시지 */}
          {showErrMsg && <ErrMsg>인증번호가 일치하지 않습니다</ErrMsg>}
          <ConfirmCompleteBtn
            onClick={handleVerifyCode}
            style={{ backgroundColor: btnColor }}
          >
            인증 완료
          </ConfirmCompleteBtn>
        </ContentWrapper>
      </PageWrapper>
    </>
  );
}

export default FindId;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-color: #fcfdf5;
`;

const ContentWrapper = styled.div`
  width: 348px;
  height: 90%;
  top: 50%;
  left: 50%;
  transform: translate(3.8%, 2%);
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  text-align: left;
  padding-left: 25px;
  font-weight: 700;
  font-size: 24px;
  line-height: 33.6px;
  font-family: "Pretendard";
  top: 50%;
  left: 50%;
  transform: translate(0%, -5%);
  margin-top : 0px;
  margin-bottom: 26px;
`;

const Letter = styled.div`
  text-align: left;
  padding-left: 25px;
  font-family: "Pretendard";
  font-weight: 600;
  font-size: 16px;
  line-height: 22.4px;
  margin-bottom:8px;
`;

const ConfirmBox = styled.div`
  padding-left: 20px;
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const PhoneNumber = styled.input`
  width: 210px;
  height: 60px;
  padding-left: 12px;
  border-radius: 12px;
  border: none;
  background-color: #f3f3f3;
  font-family: "Pretendard";
  font-size: 14px;
  font-weight: 600;
  line-height: 16.8px;
  margin-bottom:20px;
  &:focus {
    border: none;
    outline: none;
  }
`;

const ConfirmBtn = styled.button`
  width: 88px;
  height: 50px;
  border-radius: 100px;
  color: #353535;
  border: none;
  font-family: "Pretendard";
  background-color: #dfdfdf;
  font-weight: 700;
  font-size: 14px;
  line-height: 19.6px;
  margin: 5px;

  &:focus {
    background-color: #ffe6f0;
    border: none;
    border: 2px solid #ffb1d0;
  }
`;

const ConfirmNumber = styled.input`
  width: 305px;
  height: 60px;
  padding-left: 12px;
  border-radius: 12px;
  border: none;
  background-color: #f3f3f3;
  font-family: "Pretendard";
  font-size: 14px;
  font-weight: 600;
  line-height: 16.8px;
  &:focus {
    border: none;
    outline: none;
  }
`;

const ConfirmCompleteBtn = styled.button`
  width: 315px;
  height: 50px;
  border-radius: 100px;
  border: none;
  padding: 14px, 129px, 14px, 129px;
  background-color: #dfdfdf;
  margin: 10px 20px;
  font-family: "Pretendard";
  color: #353535;
  font-weight: 700;
  font-size: 16px;
  line-height: 22.4px;
  top: 50%;
  left: 50%;
  transform: translate(0%, 50%);
`;

const ErrMsg = styled.div`
  color: #ff4545;
  font-weight: 400;
  font-size: 12px;
  font-family: "Pretendard";
  line-height: 14.4px;
  text-align: left;
  display: block;
  top: 50%;
  left: 50%;
  transform: translate(7%, 50%);
`;
