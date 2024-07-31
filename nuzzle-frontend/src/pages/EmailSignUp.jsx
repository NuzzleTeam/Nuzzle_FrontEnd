import React, { useState, useEffect } from "react";
import { Form } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// 이메일 회원가입

function EmailSignUp() {

    const navigate = useNavigate();
    const backToLogin = () => { navigate('/login'); };
    const GoToEmailSignUp = () => { navigate('/signup'); };

    const [mobileModalOpen, setMobileModalOpen] = useState(false);
    const [policyModalOpen, setPolicyModalOpen] = useState(false);
    const [selectedTelecom, setSelectedTelecom] = useState("");
    const [telecomInputValue, setTelecomInputValue] = useState("");

    const selectMobileOpen = () => {
        setMobileModalOpen(true);
    }

    const selectMobilePolicy = () => {
        setPolicyModalOpen(true);
    }

    const handleTelecomSelect = (telecom) => {
        setSelectedTelecom(telecom);
        setMobileModalOpen(false);
        setPolicyModalOpen(true);
    }

    const closeMobilePolicy = () => {
        setPolicyModalOpen(false);
        setTelecomInputValue(selectedTelecom);
    }

    const [checkList, setCheckList] = useState([]);
    const [buttonColor, setButtonColor] = useState("#353535");

    const checkAll = (e) => {
        e.target.checked
            ? setCheckList(["tos", "personal", "identity", "mobile"])
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
            checkList.includes("identity") &&
            checkList.includes("mobile")
        ) {
            setButtonColor("#FFB1D0");
        }
        else {
            setButtonColor("#DFDFDF");
        }
    }, [checkList]);

    return (
        <>
            <SignUpWrapper>
                <SignUpContentWrapper>
                    <BackBtn onClick={backToLogin}>{'<'}</BackBtn>
                    <Title>휴대폰 인증</Title>
                    <SignUpForm>
                        <FormBox>
                            <FormTitle><span>이름</span></FormTitle>
                            <FormInput placeholder="이름을 작성해 주세요"></FormInput>
                        </FormBox>
                        <FormBox>
                            <FormTitle><span>생년월일 및 성별</span></FormTitle>
                            {/* <FormInput placeholder="YYMMDD"></FormInput> */}
                            <FlexContainer>
                                <DateInput placeholder="YYMMDD"></DateInput>
                                <Seperator>-</Seperator>
                                <GenderInput placeholder="0・・・・・・"></GenderInput>
                            </FlexContainer>
                        </FormBox>
                        <FormBox>
                            <FormTitle><span>통신사</span></FormTitle>
                            <FormInput placeholder="통신사 선택" onClick={selectMobileOpen} value={telecomInputValue} onChange={(e) => setTelecomInputValue(e.target.value)}></FormInput>
                        </FormBox>
                        <FormBox>
                            <FormTitle><span>휴대폰 번호</span></FormTitle>
                            <FormInput placeholder="01012345678"
                                       type="text"></FormInput>
                        </FormBox>
                    </SignUpForm>
                    <NextBtn onClick={GoToEmailSignUp}>다음</NextBtn>
                </SignUpContentWrapper>
            </SignUpWrapper>
            {mobileModalOpen && (
                <ModalWrapper>
                    <ModalContentWrapper onClick={(e) => e.stopPropagation()}>
                        <ModalTitle>통신사 선택</ModalTitle>
                        <ModalSelectWrapper>
                            <ModalSelect onClick={() => handleTelecomSelect("SKT")}>SKT</ModalSelect>
                            <ModalSelect onClick={() => handleTelecomSelect("KT")}>KT</ModalSelect>
                            <ModalSelect onClick={() => handleTelecomSelect("LG U+")}>LG U+</ModalSelect>
                            <ModalSelect onClick={() => handleTelecomSelect("SKT 알뜰폰")}>SKT 알뜰폰</ModalSelect>
                            <ModalSelect onClick={() => handleTelecomSelect("KT 알뜰폰")}>KT 알뜰폰</ModalSelect>
                            <ModalSelect onClick={() => handleTelecomSelect("LG U+ 알뜰폰")}>LG U+ 알뜰폰</ModalSelect>
                        </ModalSelectWrapper>
                    </ModalContentWrapper>
                </ModalWrapper>
            )}
            {policyModalOpen && (
                <ModalWrapper>
                    <ModalContentWrapper onClick={(e) => e.stopPropagation()}>
                        <ModalTitle>휴대폰 본인확인 약관 동의</ModalTitle>
                        <ModalSelectWrapper>
                            <ModalSelectBox>
                                <span><CircleBtn style={{marginLeft: '100px', marginTop: '8px'}} type="checkbox" name="all" onChange={checkAll} checked={checkList.length === 4 ? true : false}></CircleBtn></span><span><ModalSelect>전체 동의하기</ModalSelect></span>
                            </ModalSelectBox>
                            <ModalSelectBox>
                            <span><CircleBtn style={{marginLeft: '100px', marginTop: '8px'}} type="checkbox" name="tos" onChange={check} checked={checkList.includes("tos") ? true : false}></CircleBtn></span><span><ModalSelect>[필수] 본인확인 서비스 이용약관 동의</ModalSelect></span>
                            </ModalSelectBox>
                            <ModalSelectBox>
                            <span><CircleBtn style={{marginLeft: '95px', marginTop: '8px'}} type="checkbox" name="personal" onChange={check} checked={checkList.includes("personal") ? true : false}></CircleBtn></span><span><ModalSelect>[필수] 개인정보 수집/이용/취급 위탁 동의</ModalSelect></span>
                            </ModalSelectBox>
                            <ModalSelectBox>
                            <span><CircleBtn style={{marginLeft: '95px', marginTop: '8px'}} type="checkbox" name="identity" onChange={check} checked={checkList.includes("identity") ? true : false}></CircleBtn></span><span><ModalSelect>[필수] 고유식별정보처리 동의</ModalSelect></span>
                            </ModalSelectBox>
                            <ModalSelectBox>
                            <span><CircleBtn style={{marginLeft: '95px', marginTop: '8px'}} type="checkbox" name="mobile" onChange={check} checked={checkList.includes("mobile") ? true : false}></CircleBtn></span><span><ModalSelect>[필수] 통신사 시용약관</ModalSelect></span>
                            </ModalSelectBox>
                        </ModalSelectWrapper>
                        <AgreeBtn onClick={closeMobilePolicy} style={{ backgroundColor: buttonColor }}>동의하기</AgreeBtn>
                    </ModalContentWrapper>
                </ModalWrapper>
            )}
        </>
    )
}

export default EmailSignUp;

const SignUpWrapper = styled.div`
    width: 375px; height: 812px;
    background-color: #FCFDF5;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    font-family: 'Pretendard';
`;

const SignUpContentWrapper = styled.div`
    width: 348px; height: 90%;
    top: 50%; left: 50%;
    transform: translate(3.8%, 2%);
`;

const BackBtn = styled.button`
    background-color: #FCFDF5;
    width: 44px;
    font-size: large;
    text-align: center;
    top: 50%; left: 50%;
    transform: translate(-330%, 30%);
`;

const Title = styled.div`
    text-align: left;
    padding-left: 25px;
    font-weight: 700;
    font-size: 24px;
    line-height: 33.6px;
    top: 50%; left: 50%;
    transform: translate(0%, 30%);
`;

const SignUpForm = styled.form`
    top: 50%; left: 50%;
    transform: translate(5%, 10%);
`;

const FormBox = styled.div`
    width: 316px;
    margin-bottom: 20px;
`;

const FormTitle = styled.div`
    font-weight: 600;
    font-size: 16px;
    line-height: 22.4px;
    text-align: left;
    margin-bottom: 5px;
    margin-left: 3px;
`;

const FormInput = styled.input`
    background-color: #F3F3F3;
    width: 305px; height: 60px;
    border-radius: 12px;
    border: none;
    font-weight: 700;
    font-size: 14px;
    line-height: 16.8px;
    padding-left: 10px;

    &::placeholder {
        color: #959595;
    }
`;

const FlexContainer = styled.div`
    background-color: #F3F3F3;
    width: 305px; height: 60px;
    border-radius: 12px;
    border: none;
    font-weight: 700;
    font-size: 14px;
    line-height: 16.8px;
    padding-left: 10px;
    display: flex;
`;

const DateInput = styled.input`
    background-color: #F3F3F3;
    width: 120px; height: 60px;
    border-radius: 12px;
    border: none;
    font-weight: 700;
    font-size: 14px;
    line-height: 16.8px;
    padding-left: 10px;
`;

const GenderInput = styled.input`
    background-color: #F3F3F3;
    width: 120px; height: 60px;
    border-radius: 12px;
    border: none;
    font-weight: 700;
    font-size: 14px;
    line-height: 16.8px;
    padding-left: 10px;
`;

const Seperator = styled.div`
    width: 50px; height: 60px;
    top: 50%; left: 50%;
    transform: translate(-30%, 35%);
`;

const NextBtn = styled.button`
    width: 315px; height: 50px;
    border-radius: 100px;
    background-color: #FFB1D0;
    top: 50%; left: 50%;
    transform: translate(0%, 200%);
    font-weight: 700;
    font-size: 14px;
    line-height: 16.8px;
`;

const AgreeBtn = styled.button`
    width: 315px; height: 50px;
    border-radius: 100px;
    background-color: #FFB1D0;
    top: 50%; left: 50%;
    transform: translate(0%, 20%);
    font-weight: 700;
    font-size: 14px;
    line-height: 16.8px;
`;

const ModalWrapper = styled.div`
    width: 375px; height: 812px;
    background-color: rgba(0,0,0,0.5);
    top: 50%; left: 50%;
    transform: translate(0%, -100%);
`;

const ModalContentWrapper = styled.div`
    width: 375px; height: 360px;
    background-color: #FCFDF5;
    border: 1px solid black;
    border-radius: 20px 20px 0 0;
    top: 50%; left: 50%;
    transform: translate(0%, 125%);
`;

const ModalTitle = styled.div`
    font-weight: 600;
    font-size: 16px;
    line-height: 22.4px;
    margin: 20px;
    border-bottom: 2px solid #FFB1D0;
`;

const ModalSelectWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const ModalSelectBox = styled.div`
    display: flex;
    background-color: #FCFDF5;
`;

const ModalSelect = styled.button`
    font-weight: 400;
    font-size: 16px;
    line-height: 22.4px;
    font-family: 'Pretendard';
    width: 300px;
    margin-left: -90px;
    text-align: left;
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