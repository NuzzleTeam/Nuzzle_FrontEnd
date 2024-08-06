import { useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

// 가족 연결 페이지

function Connect() {

    const location = useLocation();
    const baseUrl = "http://localhost:5173";

    const [linkModal, setLinkModal] = useState(false);
    const [codeModal, setCodeModal] = useState(false);
    const [codeInputModal, setCodeInputModal] = useState(false);
    const [changePwModal, setChangePwModal] = useState(false);

    const openLinkModal = () => {setLinkModal(true);};
    const closeLinkModal = () => {setLinkModal(false);};

    const openCodeModal = () => {setCodeModal(true);};
    const closeCodeModal = () => {setCodeModal(false);};

    const openCodeInputModal = () => {setCodeInputModal(true);};
    const closeCodeInputModal = () => {setCodeInputModal(false);};

    const openChangePwModal = () => {setChangePwModal(true);};
    const closeChangePwModal = () => {setChangePwModal(true);};

    const handleCopyClipBoard = async (text) => {
        try {
            await navigator.clipboard.writeText(text);
            // alert("클립보드에 링크가 복사되었어요.");
        } catch (err) {
            console.log(err);
        }
    };

    const handleCopyCode = async (text) => {
        try {
            await navigator.clipboard.writeText(text);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <ConnectWrapper>
                <ConnectContentWrapper>
                    <Top>
                        <BackBtn>{'<'}</BackBtn>
                        <ProgressBar>
                            <InnerProgreeBar/><InnerProgreeBar style={{backgroundColor: '#FFB1D0'}}/><InnerProgreeBar/>
                        </ProgressBar>
                    </Top>
                    <Title>가족 연결을 해주세요</Title>
                    <Img src="img/connect.png"></Img>
                    <Share>
                        <ConnectBox onClick={() => {handleCopyClipBoard(`${baseUrl}${location.pathname}`); openLinkModal();}}>
                            <ConnectTitle>링크 공유하기</ConnectTitle>
                            <span style={{fontWeight: '400', fontSize: '12px', lineHeight: '16.8px'}}>버튼을 누르면 링크가 자동으로 복사돼요!</span>
                            <img src="img/link_chain.png" style={{width: '44px', height: '44px', marginLeft: '135px'}}></img>
                        </ConnectBox>
                        <ConnectBox onClick={() => {handleCopyCode(``); openCodeModal();}}>
                            <ConnectTitle>코드 공유하기</ConnectTitle>
                            <span>_____님의 코드는 ________ 입니다.</span>
                            <span>코드를 누르면 복사돼요!</span>
                        </ConnectBox>
                        <ConnectBox onClick={openCodeInputModal}>
                            <ConnectTitle>가족의 코드를 공유 받았나요?</ConnectTitle>
                            <ConnectInput style={{marginLeft: '60px'}} placeholder="직접 입력해보세요!"></ConnectInput>
                        </ConnectBox>
                    </Share>
                    <ConnectBtnWrapper>
                        <AddBtn>구성원 추가하기</AddBtn>
                        <CompleteBtn>우리 가족 완성!</CompleteBtn>
                    </ConnectBtnWrapper>
                </ConnectContentWrapper>
            </ConnectWrapper>
            {linkModal && (
                <ModalWrapper>
                    <ModalContentWrapper>
                        <ModalTitle>링크가 복사되었습니다</ModalTitle>
                        <ModalBtn onClick={closeLinkModal} style={{marginLeft: '15px'}}>확인</ModalBtn>
                    </ModalContentWrapper>
                </ModalWrapper>
            )}
            {codeModal && (
                <ModalWrapper>
                    <ModalContentWrapper>
                        <ModalTitle>코드가 복사되었습니다</ModalTitle>
                        <ModalBtn onClick={closeCodeModal} style={{marginLeft: '15px'}}>확인</ModalBtn>
                    </ModalContentWrapper>
                </ModalWrapper>
            )}
            {codeInputModal && (
                <ModalWrapper>
                    <ModalContentWrapper style={{backgroundColor: 'white'}}>
                        <ModalTitle>가족의 코드를 공유 받았나요?</ModalTitle>
                        <ModalInput placeholder="직접 입력해보세요!" style={{marginLeft: '60px', textAlign: 'center'}}></ModalInput>
                    </ModalContentWrapper>
                </ModalWrapper>
            )}
            {/* <ModalWrapper>
                <ModalContentWrapper>
                    <ModalTitle>비밀번호가 변경되었습니다</ModalTitle>
                    <ModalSmallTitle>비밀번호가 변경되었습니다.</ModalSmallTitle>
                    <ModalSmallTitle>다시 로그인해 주세요</ModalSmallTitle>
                    <ModalBtn>확인</ModalBtn>
                </ModalContentWrapper>
            </ModalWrapper> */}
            {/* <ModalWrapper>
                <ModalContentWrapper>
                    <ModalTitle>이미 가입된 계정이 있어요</ModalTitle>
                    <ModalSmallTitle>이미 인증된 휴대폰번호로</ModalSmallTitle>
                    <ModalSmallTitle>가입된 계정이 있어요.</ModalSmallTitle>
                    <ModalBtn>확인</ModalBtn>
                </ModalContentWrapper>
            </ModalWrapper> */}
        </>
    )
}

export default Connect;

const ConnectWrapper = styled.div`
    width: 375px; height: 812px;
    background-color: #FCFDF5;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    font-family: 'Pretendard';
`;

const ConnectContentWrapper = styled.div`
    width: 348px; height: 90%;
    top: 50%; left: 50%;
    transform: translate(3.8%, 2%);
`;

const Top = styled.div`
    display: flex;
    top: 50%; left: 50%;
    transform: translate(0%, 2%);
`;

const BackBtn = styled.button`
    background-color: #FCFDF5;
    width: 44px;
    font-size: large;
    text-align: center;
    top: 50%; left: 50%;
    transform: translate(-20%, 30%);
`;

const ProgressBar = styled.div`
    width: 229px; height: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 50%; left: 50%;
    transform: translate(5%, 550%);
`;

const InnerProgreeBar = styled.div`
    width: 76.33px; height: 6px;
    background-color: #D9D9D9;
`;

const Title = styled.div`
    /* border: 1px solid black; */
    text-align: center;
    font-weight: 700;
    font-size: 20px; line-height: 24px;
    top: 50%; left: 50%;
    transform: translate(0%, 150%);
`;

const Img = styled.img`
    width: 162.78px; height: 83px;
    top: 50%; left: 50%;
    transform: translate(0%, 60%);
`;

const Share = styled.div`
    display: flex; flex-direction: column;
    top: 50%; left: 50%;
    transform: translate(5%, 15%);
`;

const ConnectBox = styled.div`
    width: 314px; height: 122px;
    border-radius: 31px;
    border: 1px solid #FFB1D0;
    gap: 10px;
    box-shadow: 1px 1px 5px gray;
    margin-bottom: 20px;
    display: flex; flex-direction: column;
`;

const ConnectTitle = styled.div`
    font-weight: 700;
    font-size: 16px;
    line-height: 22.4px;
    text-align: center;
    color: #353535;
    margin-top: 10px;
`;

const ConnectInput = styled.input`
    background-color: #F3F3F3;
    width: 189px; height: 44px;
    background-color: #F2F2F2;
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

const ConnectBtnWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    top: 50%; left: 50%;
    gap: 10px;
    transform: translate(5%, -20%);
`;

const AddBtn = styled.button`
    width: 315px; height: 50px;
    border-radius: 100px;
    background-color: #FFB1D0;
    top: 50%; left: 50%;
    transform: translate(0%, 200%);
    font-weight: 700;
    font-size: 14px;
    line-height: 16.8px;
`;

const CompleteBtn = styled.button`
    width: 315px; height: 50px;
    border-radius: 100px;
    background-color: #FFB1D0;
    top: 50%; left: 50%;
    transform: translate(0%, 200%);
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
    width: 320px; height: 118.42px;
    background-color: #FFE6F0;
    border: 1px solid #FF87B7;
    border-radius: 20px;
    top: 50%; left: 50%;
    transform: translate(8%, 275%);
    display: flex; flex-direction: column;
`;

const ModalTitle = styled.div`
    font-weight: 600;
    font-size: 16px;
    line-height: 22.4px;
    margin: 20px;
`;

const ModalBtn = styled.button`
    width: 290px; height: 40px;
    border-radius: 30px;
    background-color: #FFB1D0;
    font-weight: 700;
    font-size: 14px; line-height: 18px;
`;

const ModalInput = styled.input`
    background-color: #F3F3F3;
    width: 189px; height: 44px;
    background-color: #F2F2F2;
    border-radius: 12px;
    border: none;
    font-weight: 600;
    font-size: 14px;
    line-height: 19.6px;
    padding-left: 10px;

    &::placeholder {
        color: #717171;
    }
`;

const ModalSmallTitle = styled.div`
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #353535;
`;