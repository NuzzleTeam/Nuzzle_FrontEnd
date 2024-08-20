import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import confirmTimer from "../../hooks/confirmTimer";
// 아이디 찾기

function FindId() {

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
        <PageWrapper>
            <ContentWrapper>
                <Title><h3>아이디 찾기</h3></Title>
                <Letter><h5>휴대폰 번호</h5></Letter>
                <ConfirmBox>
                    <PhoneNumber placeholder="01012345678"
                                type="text"
                                onChange={handleChange}></PhoneNumber>
                    <ConfirmBtn onClick={!verificationStatus.sent ? sendVerification : resendVerification}
                                disabled={phoneNumberDisabled}
                    >{!verificationStatus.sent ? "인증받기" : "재전송"}</ConfirmBtn>
                </ConfirmBox>
                <Letter><h5>인증번호</h5></Letter>
                {/* {verificationStatus.sent && (
                    <ConfirmBox>
                        <ConfirmNumber placeholder="인증번호 4자리"
                                        value={verificationCode}
                                        onChange={handleVerificationCodeChange}></ConfirmNumber>
                    </ConfirmBox>
                )} */}
                <ConfirmBox>
                    <ConfirmNumber placeholder="인증번호 4자리" value={verificationCode}
                  onChange={handleVerificationCodeChange} ></ConfirmNumber>
                </ConfirmBox>
                <ErrMsg>인증번호가 일치하지 않습니다</ErrMsg>
                <ConfirmCompleteBtn onClick={verifyCode} style={{backgroundColor: btnColor}}>인증 완료</ConfirmCompleteBtn>
            </ContentWrapper>
        </PageWrapper>
      </>
    )
}
  
export default FindId;

const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;    
    width : 100%;
    background-color: #FCFDF5;
`;

const ContentWrapper = styled.div`
    width: 348px; height: 90%;
    top: 50%; left: 50%;
    transform: translate(3.8%, 2%);
    display: flex; flex-direction: column;
`;


const Title = styled.div`
    text-align: left;
    padding-left: 25px;
    font-weight: 700;
    font-size: 24px;
    line-height: 33.6px;
    top: 50%; left: 50%;
    transform: translate(0%, -5%);
`;

const Letter = styled.div`
    text-align: left;
    padding-left: 25px;
    font-weight: 600;
    font-size: 16px;
    line-height: 22.4px;
`;

const ConfirmBox = styled.div`
    padding-left: 20px;
    display: flex; flex-direction: row;
    gap: 10px;
`;

const PhoneNumber = styled.input`
    width: 210px; height: 60px;
    padding-left: 12px;
    border-radius: 12px;
    border: none;
    background-color: #F3F3F3;
    font-family: 'Pretendard';
    font-size: 14px; line-height: 16.8px;
    &:focus {
        border: none; 
        outline: none; 
    }
`;

const ConfirmBtn = styled.button`
    width: 88px; height: 50px;
    border-radius: 100px;
    color:#353535;
    border : none;
    font-family: 'Pretendard';
    background-color: #DFDFDF;
    font-weight: 700;
    font-size: 14px; line-height: 19.6px;
    margin: 5px;

    &:focus {
        background-color: #FFE6F0;
        border: none;
        border: 2px solid #FFB1D0;
    }
`;

const ConfirmNumber = styled.input`
    width: 305px; height: 60px;
    padding-left: 12px;
    border-radius: 12px;
    border: none;
    background-color: #F3F3F3;
    font-family: 'Pretendard';
    font-size: 14px; line-height: 16.8px;
    &:focus {
        border: none; 
        outline: none; 
    }
`;

const ConfirmCompleteBtn = styled.button`
    width: 315px; height: 50px;
    border-radius: 100px;
    border:none;
    padding: 14px, 129px, 14px, 129px;
    background-color: #DFDFDF;
    margin: 10px 20px;
    font-family: 'Pretendard';
    color: #353535;
    font-weight: 700;
    font-size: 16px;
    line-height: 22.4px;
    top: 50%; left: 50%;
    transform: translate(0%, 50%);
`;

const ErrMsg = styled.div`
    color: #FF4545;
    font-weight: 400;
    font-size: 12px;
    line-height: 14.4px;
    text-align: left;
    display: block;
    top: 50%; left: 50%;
    transform: translate(7%, 50%);
`;