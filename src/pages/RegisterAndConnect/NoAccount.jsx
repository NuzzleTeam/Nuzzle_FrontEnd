import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// 아이디 찾기 - 계정 X

function NoAccount() {

    const navigate = useNavigate();
    const goToEmailSignUp = () => {navigate("/signup/email");};

    return (
      <>
        <PageWrapper>
            <ContentWrapper>
                <Title><h3>가입된 계정이 없습니다</h3></Title>
                <Img src="src/assets/img/noaccount.png"></Img>
                <BtnWrapper>
                    <Btn style={{backgroundColor: '#FFB1D0'}} onClick={goToEmailSignUp}>이메일로 회원가입하기</Btn>
                    <Btn>카카오톡으로 회원가입하기</Btn>
                </BtnWrapper>
                <Bubble><h5>초간단!</h5></Bubble>
            </ContentWrapper>
        </PageWrapper>
      </>
    )
}
  
export default NoAccount;

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
    font-size: 24px; line-height: 33.6px;
`;

const Img = styled.img`
    width: 255.13px; height: 225.35px;
    top: 50%; left: 50%;
    transform: translate(20%, 30%);
`;

const Bubble = styled.div`
    width: 50px; height: 40px;
    border-radius: 10px;
    background-color: #FFB1D0;
    font-size: 12px;
    top: 50%; left: 50%;
    transform: translate(400%, 320%);

    &:after {
        content: '';
        position: absolute;
        border-style: solid;
        /* border-width: 15px 10px 0; */
        border-width: 0 10px 15px;
        border-color: #FFB1D0 transparent;
        display: block;
        width: 0;
        z-index: 1;
        bottom: 35px;
        left: 15px;
    }
`;

const BtnWrapper = styled.div`
    display: flex; flex-direction: column;
    gap: 10px;
    top: 50%; left: 50%;
    transform: translate(5%, -10%);
`;

const Btn = styled.button`
    width: 315px; height: 60px;
    border-radius: 12px;
    background-color: #F7E300;
    font-weight: 600;
    font-size: 16px; line-height: 19.2px;
    color: #371D1E;
    top: 50%; left: 50%;
    transform: translate(0%, 200%);
`;