import styled from "styled-components";
import confirmTimer from "../../hooks/confirmTimer";
import { useNavigate } from "react-router-dom";

// 비밀번호 찾기

function FindPw() {

    const navigate = useNavigate();
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

    return (
      <>
        <FindIdWrapper>
            <FindIdContentWrapper>
                <BackBtn onClick={backToLogin}>{'<'}</BackBtn>
                <Title><h3>비밀번호 찾기</h3></Title>
                <Letter><h5>아이디</h5></Letter>
                <ConfirmBox>
                    <Id placeholder="01012345678"
                        type="text"
                        onChange={handleChange}></Id>
                </ConfirmBox>
                <Letter><h5>휴대폰 번호</h5></Letter>
                <ConfirmBox>
                    <PhoneNumber placeholder="01012345678"
                                 type="text"
                                 onChange={handleChange}></PhoneNumber>
                    <ConfirmBtn onClick={!verificationStatus.sent ? sendVerification : resendVerification}
                                disabled={phoneNumberDisabled}>{!verificationStatus.sent ? "인증받기" : "재전송"}</ConfirmBtn>
                </ConfirmBox>
                <Letter><h5>인증번호</h5></Letter>
                <ConfirmBox>
                    <ConfirmNumber placeholder="인증번호 4자리" type="text" value={verificationCode}
                  onChange={handleVerificationCodeChange}></ConfirmNumber>
                </ConfirmBox>
                <ConfirmCompleteBtn>인증 완료</ConfirmCompleteBtn>
            </FindIdContentWrapper>
        </FindIdWrapper>
      </>
    )
}
  
export default FindPw;

const FindIdWrapper = styled.div`
    width: 375px; height: 812px;
    background-color: #FCFDF5;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    font-family: 'Pretendard';
`;

const FindIdContentWrapper = styled.div`
    width: 348px; height: 90%;
    top: 50%; left: 50%;
    transform: translate(3.8%, 2%);
    display: flex; flex-direction: column;
`;

const BackBtn = styled.button`
    background-color: #FCFDF5;
    width: 44px;
    font-size: large;
    text-align: center;
    top: 50%; left: 50%;
    transform: translate(10%, 30%);
`;

const Title = styled.div`
    /* border: 1px solid black; */
    text-align: left;
    padding-left: 25px;
`;

const Letter = styled.div`
    /* border: 1px solid black; */
    text-align: left;
    padding-left: 25px;
`;

const ConfirmBox = styled.div`
    /* border: 1px solid red; */
    padding-left: 20px;
    display: flex; flex-direction: row;
    gap: 10px;
`;

const Id = styled.input`
    width: 220px; height: 60px;
    padding: 20px, 12px, 20px, 12px;
    border-radius: 12px;
    border: none;
    background-color: #F3F3F3;   
`;

const PhoneNumber = styled.input`
    width: 220px; height: 60px;
    padding: 20px, 12px, 20px, 12px;
    border-radius: 12px;
    border: none;
    background-color: #F3F3F3;
`;

const ConfirmBtn = styled.button`
    width: 88px; height: 50px;
    padding: 14px, 129px, 14px, 129px;
    border-radius: 100px;
    background-color: #CBCBCB;
    font-size: small;
    margin: 5px;
`;

const ConfirmNumber = styled.input`
    width: 315px; height: 60px;
    padding: 20px, 12px, 20px, 12px;
    border-radius: 12px;
    border: none;
    background-color: #F3F3F3;
`;

const ConfirmCompleteBtn = styled.button`
    width: 315px; height: 50px;
    border-radius: 100px;
    padding: 14px, 129px, 14px, 129px;
    background-color: #CBCBCB;
    margin: 10px 20px;
`;