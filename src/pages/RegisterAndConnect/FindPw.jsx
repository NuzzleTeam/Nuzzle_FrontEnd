import styled from "styled-components";
import confirmTimer from "../../hooks/confirmTimer";
import { useNavigate } from "react-router-dom";

// 비밀번호 찾기

function FindPw() {
  const navigate = useNavigate();
  const backToLogin = () => {
    navigate("/login");
  };
  const goChangePW = () => {
    navigate("/help/changepw");
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

  return (
    <>
      <FindIdWrapper>
        <FindIdContentWrapper>
          <Title>
            <div>비밀번호 찾기</div>
          </Title>
          <Letter>
            <div>아이디</div>
          </Letter>
          <ConfirmBox>
            <Id
              placeholder="아이디를 입력하세요"
              type="text"
              onChange={handleChange}
            ></Id>
          </ConfirmBox>
          <Letter>
            <div>휴대폰 번호</div>
          </Letter>
          <ConfirmBox>
            <PhoneNumber
              placeholder="01012345678"
              type="text"
              onChange={handleChange}
            ></PhoneNumber>
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
            <div>인증번호</div>
          </Letter>
          <ConfirmBox>
            <ConfirmNumber
              placeholder="인증번호 4자리"
              type="text"
              value={verificationCode}
              onChange={handleVerificationCodeChange}
            ></ConfirmNumber>
          </ConfirmBox>
          <ConfirmCompleteBtn onClick={goChangePW}>
            인증 완료
          </ConfirmCompleteBtn>
        </FindIdContentWrapper>
      </FindIdWrapper>
    </>
  );
}

export default FindPw;

const FindIdWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-color: #fcfdf5;
`;

const FindIdContentWrapper = styled.div`
  width: 348px;
  height: 90%;
  transform: translate(3.8%, 2%);
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  text-align: left;
  font-family: "Pretendard";
  font-weight: bold;
  font-size: 24px;
  line-height: 50px;
`;

const Letter = styled.div`
  text-align: left;
  font-family: "Pretendard";
  font-weight: 600;
  font-size: 16px;
  line-height: 50px;
`;

const ConfirmBox = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const Id = styled.input`
  width: 220px;
  height: 60px;
  padding: 20px, 12px, 20px, 12px;
  border-radius: 12px;
  border: none;
  font-family: "Pretendard";
  font-size: 14px;
  font-weight: 600;
  background-color: #f3f3f3;
  padding-left: 10px;
  &:focus {
    border: none;
    outline: none;
  }
`;

const PhoneNumber = styled.input`
  width: 220px;
  height: 60px;
  padding: 20px, 12px, 20px, 12px;
  border-radius: 12px;
  border: none;
  font-family: "Pretendard";
  font-size: 14px;
  font-weight: 600;
  background-color: #f3f3f3;
  padding-left: 10px;
  &:focus {
    border: none;
    outline: none;
  }
`;

const ConfirmBtn = styled.button`
  width: 88px;
  height: 50px;
  padding: 14px, 129px, 14px, 129px;
  border-radius: 100px;
  background-color: #cbcbcb;
  font-family: "Pretendard";
  font-weight: bold;
  color: #353535;
  font-size: small;
  margin: 5px;
  border: none;
`;

const ConfirmNumber = styled.input`
  width: 300px;
  height: 60px;
  border-radius: 12px;
  border: none;
  font-family: "Pretendard";
  font-size: 14px;
  font-weight: 600;
  background-color: #f3f3f3;
  padding-left: 10px;
  &:focus {
    border: none;
    outline: none;
  }
`;

const ConfirmCompleteBtn = styled.button`
  width: 315px;
  height: 50px;
  border-radius: 100px;
  background-color: #cbcbcb;
  margin: 10px 20px;
  border: none;
  color: #353535;
  font-size: 16px;
  font-family: "Pretendard";
  font-weight: bold;
  position: relative;
  top: 10px;
  left: -20px;
`;
