import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// 아이디 찾기 - 계정 O

function FindAccount() {

    const navigate = useNavigate();
    const goToLogin = () => { navigate('/login'); }
    const goToFindPw = () => { navigate('/help/findpw'); }

    return (
      <>
        <PageWrapper>
            <ContentWrapper>
                <Title><h3>가입된 계정 정보 확인</h3></Title>
                <Letter>
                    정보가 일치하는 계정이 존재합니다. 
                    아래 계정으로 로그인해주세요!
                </Letter>
                <AccountBox>
                    <CheckAccount></CheckAccount>
                </AccountBox>
                <BtnWrapper>
                    <Btn onClick={goToLogin} style={{backgroundColor: '#FFB1D0', border: 'none'}}>로그인하기</Btn>
                    <Btn onClick={goToFindPw}>비밀번호 찾기</Btn>
                </BtnWrapper>
            </ContentWrapper>
        </PageWrapper>
      </>
    )
}
  
export default FindAccount;

const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
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
`;

const Letter = styled.p`
    text-align: left;
    padding-left: 25px;
    white-space: pre-wrap;
    font-family: 'Pretendard';
    font-weight: 400;
    font-size: 14px;
    line-height: 19.6px;
    color: #717171;
    top: 50%; left: 50%;
    transform: translate(0%, -50%);
`;

const AccountBox = styled.div`
    padding-left: 20px;
    display: flex; flex-direction: row;
    gap: 10px;
`;

const CheckAccount = styled.div`
    width: 315px; height: 60px;
    padding: 20px, 12px, 20px, 12px;
    border-radius: 12px;
    border: none;
    background-color: #F3F3F3;
`;

const BtnWrapper = styled.div`
    display: flex; flex-direction: row;
    gap: 10px;
    margin-left: 20px;
`;

const Btn = styled.button`
    width: 150px; height: 50px;
    border-radius: 30px;
    background-color: white;
    border: 1px solid #CBCBCB;
    margin-top: 20px;
    font-family: 'Pretendard';
    font-weight: 700;
    font-size: 14px;
    line-height: 16.8px;
`;