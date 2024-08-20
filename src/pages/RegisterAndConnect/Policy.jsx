import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

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
                <Title><p style={{margin: '0'}}>서비스 이용을 위해</p><p style={{margin: '0'}}>이용약관 동의가 필요합니다.</p></Title>
                <AllBtn>
                    <span>약관 전체 동의</span>
                    <CircleBtn type="checkbox" name="all" onChange={checkAll} checked={checkList.length === 3 ? true : false} />
                </AllBtn>
                <ConfirmBox>
                    <BtnWrapper>
                        <ToSTitle>
                            <span>이용약관 <span style={{color: '#FFB1D0'}}>(필수)</span></span>
                            <CircleBtn type="checkbox" name="tos" onChange={check} checked={checkList.includes("tos") ? true : false} />
                        </ToSTitle>
                        <ToSContent>사이트 이용 약관 내용이 노출됩니다. 내용이 길어지는 경우 영역은 고정되고 스크롤이 활성화됩니다.</ToSContent>
                    </BtnWrapper>
                    <BtnWrapper>
                        <ToSTitle>
                            <span>개인정보 수집 및 이용 <span style={{color: '#FFB1D0'}}>(필수)</span> </span>
                            
                            <CircleBtn type="checkbox" name="personal" onChange={check} checked={checkList.includes("personal") ? true : false} />
                        </ToSTitle>
                        <ToSContent>이메일, 휴대전화번호, 생년월일, 성별, 주소 등의 개인정보를 수집하고 이용하는 것 관련한 내용이 노출됩니다. 개인정보 법령에 따라 14세 미만의 사용자를 위해 어린이용 설명이 따로 제공되어야 합니다.</ToSContent>
                    </BtnWrapper>
                    <BtnWrapper>
                        <ToSTitle>
                            <span>광고성 정보 수신 동의 <span style={{color: '#FFB1D0'}}>(선택)</span></span>
                            
                            <CircleBtn type="checkbox" name="advertising" onChange={check} checked={checkList.includes("advertising") ? true : false} />
                        </ToSTitle>
                        <ToSContent>수신동의 하면 다양한 정보를 받아보실 수 있습니다.</ToSContent>
                    </BtnWrapper>
                </ConfirmBox>
                <AgreeBtn style={{ backgroundColor: buttonColor }} onClick={goToConnect} disabled={btnDisabled}>동의하기</AgreeBtn>
            </ContentWrapper>
        </PageWrapper>
      </>
    );
}

export default Policy;

const PageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: 100vh;
    width: 100%;
    background-color: #FCFDF5;
    padding-top: 20px;
`;

const ContentWrapper = styled.div`
    width: 348px;
    max-height: 90vh;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const Title = styled.div`
    text-align: left;
    font-weight: 700;
    font-size: 20px;
    line-height: 28px;
    font-family: 'Pretendard';
`;

const AllBtn = styled.button`
    width: 100%;
    height: 60px;
    padding: 10px;
    border-radius: 12px;
    background-color: #F3F3F3;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    font-family: 'Pretendard';
    font-weight: 600;
    margin-bottom:10px;
`;

const ToSTitle = styled.div`
    display: flex;
    align-items: center;
    font-family: 'Pretendard';
    font-weight: bold;
    font-size: 16px;
    line-height: 22.4px;
    justify-content: space-between;
    width: 100%;
    margin-bottom:5px;
`;

const ToSContent = styled.div`
    border-radius: 12px;
    border: 1px solid #959595;
    padding: 9px 12px;
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;
    color: #959595;
    font-family: 'Pretendard';
    overflow-y: auto;
    max-height: 100px;
`;

const ConfirmBox = styled.div` 
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const BtnWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const AgreeBtn = styled.button`
    width: 80%;
    height: 50px;
    border-radius: 100px;
    background-color: #F3F3F3;
    font-family: 'Pretendard';
    font-weight: 700;
    font-size: 16px;
    line-height: 22.4px;
    color: #353535;
    position: absolute;
    bottom: 100px;
    border:none;
    left: 50%;
    transform: translateX(-50%);
`;

const CircleBtn = styled.input`
    appearance: none;
    width: 28px;
    height: 28px;
    background-color: #DFDFDF;
    border-radius: 50%;
    cursor: pointer;

    &:checked {
        background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='black' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
        background-size: 100% 100%;
        background-position: center;
        background-repeat: no-repeat;
        background-color: #FFB1D0;
    }
`;
