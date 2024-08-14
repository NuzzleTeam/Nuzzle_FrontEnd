import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// 이용약관 동의

function Policy() {

    const navigate = useNavigate();
    const backToLogin = () => { navigate("/login"); };
    const goToConnect = () => { navigate("/connect"); };

    const [checkList, setCheckList] = useState([]);
    const [buttonColor, setButtonColor] = useState("#353535");
    const [btnDisabled, setBtnDisabled] = useState(true);

    const checkAll = (e) => {
        e.target.checked
            ? setCheckList(["tos", "personal", "advertising"])
            : setCheckList([]);
    }

    const check = (e) => {
        e.target.checked
            ? setCheckList([...checkList, e.target.name])
            : setCheckList(checkList.filter((choice) => choice !== e.target.name));
    }

    useEffect(() => {
        if (
            checkList.includes("tos") &&
            checkList.includes("personal") &&
            checkList.includes("advertising")
        ) {
            setButtonColor("#FFB1D0");
            setBtnDisabled(false);
        }
        else {
            setButtonColor("#DFDFDF");
            setBtnDisabled(true);
        }
    }, [checkList]);

    return (
      <>
        <PageWrapper>
            <ContentWrapper>
                <BackBtn onClick={backToLogin}>{'<'}</BackBtn>
                <Title><p style={{margin: '0'}}>서비스 이용을 위해</p><p style={{margin: '0'}}>이용약관 동의가 필요합니다.</p></Title>
                <AllBtn><span>약관 전체 동의</span></AllBtn><span><CircleBtn style={{marginLeft: '105px', marginTop: '0'}} type="checkbox" name="all" onChange={checkAll} checked={checkList.length === 3 ? true : false}></CircleBtn></span>
                <ConfirmBox>
                    <BtnWrapper>
                        <ToSTitle><span>이용약관 </span><span style={{color: '#FFB1D0'}}>(필수)</span><span><CircleBtn style={{marginLeft: '95px', marginTop: '-6px'}} type="checkbox" name="tos" onChange={check} checked={checkList.includes("tos") ? true : false}></CircleBtn></span></ToSTitle>
                        <ToSContent>사이트 이용 약관 내용이 노출됩니다. 내용이 길어지는 경우 영역은 고정되고 스크롤이 활성화됩니다.</ToSContent>
                    </BtnWrapper>
                    <BtnWrapper>
                        <ToSTitle><span>개인정보 수집 및 이용 </span><span style={{color: '#FFB1D0'}}>(필수)</span><span><CircleBtn style={{marginLeft: '15px', marginTop: '-6px'}} type="checkbox" name="personal" onChange={check} checked={checkList.includes("personal") ? true : false}></CircleBtn></span></ToSTitle>
                        <ToSContent>이메일, 휴대전화번호, 생년월일, 성별, 주소 등의 개인정보를 수집하고 이용하는 것 관련한 내용이 노출됩니다. 개인정보 법령에 따라 14세 미만의 사용자를 위해 어린이용 설명이 따로 제공되어야 합니다.</ToSContent>
                    </BtnWrapper>
                    <BtnWrapper>
                        <ToSTitle><span>광고성 정보 수신 동의 </span><span style={{color: '#FFB1D0'}}>(필수)</span><span><CircleBtn style={{marginLeft: '15px', marginTop: '-6px'}} type="checkbox" name="advertising" onChange={check} checked={checkList.includes("advertising") ? true : false}></CircleBtn></span></ToSTitle>
                        <ToSContent>수신동의 하면 다양한 정보를 받아보실 수 있습니다.</ToSContent>
                    </BtnWrapper>
                </ConfirmBox>
                <AgreeBtn style={{ backgroundColor: buttonColor }} onClick={goToConnect} disabled={btnDisabled}>동의하기</AgreeBtn>
            </ContentWrapper>
        </PageWrapper>
      </>
    )
}
  
export default Policy;

const PageWrapper = styled.div`
    width: 400px; 
    height: 840px;
    background-color: #FCFDF5;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    font-family: 'Pretendard';
`;

const ContentWrapper = styled.div`
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
    text-align: left;
    padding-left: 25px;
    font-weight: 700;
    font-size: 20px;
    line-height: 28px;
    top: 50%; left: 50%;
    transform: translate(0%, 30%);
`;

const AllBtn = styled.button`
    width: 315px; height: 60px;
    padding: 10px;
    border-radius: 12px;
    background-color: #F3F3F3;
    text-align: left;
    top: 50%; left: 50%;
    transform: translate(7%, 70%);
`;

const ToSTitle = styled.div`
    width: 299px; height: 28px;
    text-align: left;
    font-family: 'Pretendard';
    font-weight: 600;
    font-size: 16px;
    line-height: 22.4px;
    display: flex;
`;

const ToSContent = styled.div`
    border-radius: 12px;
    border: 1px solid #959595;
    padding: 9px 12px 9px 12px;
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;
    text-align: left;
    overflow-y: scroll;
    color: #959595;
    overflow: auto;
    flex-flow: wrap;
`;

const ConfirmBox = styled.div` 
    width: 315px;
    display: flex; flex-direction: column;
    gap: 20px;
    top: 50%; left: 50%;
    transform: translate(7%, 30%);
`;

const BtnWrapper = styled.div`
    display: flex; flex-direction: column;
`;

const AgreeBtn = styled.button`
    width: 315px; height: 50px;
    border-radius: 100px;
    background-color: #F3F3F3;
    font-family: 'Pretendard';
    font-weight: 700;
    font-size: 16px;
    line-height: 22.4px;
    color: #353535;
    top: 50%; left: 50%;
    transform: translate(5%, 550%);
`;

const CircleBtn = styled.input`
    appearance: none;
    width: 28px; height: 28px;
    background-color: #DFDFDF;
    border-radius: 50%;
    transform: translateX(300%);

    &:checked {
        border-color: transparent;
        background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='black' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
        background-size: 100% 100%;
        background-position: 50%;
        background-repeat: no-repeat;
        background-color: #FFB1D0;
    }
`;