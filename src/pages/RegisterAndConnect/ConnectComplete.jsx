import styled from "styled-components";
import { useNavigate } from "react-router-dom";
// 가족 연결 완료 페이지

function ConnectComplete() {
    const navigate = useNavigate();

    const goToConnect = () => {
        navigate("/connect");
    };
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
                    <Title><span>_____님과 </span><span>가족 연결이 완료됐습니다!</span></Title>
                    <Img src="/src/assets/img/connect_complete.png"></Img>
                    <ConnectBtnWrapper>
                        <AddBtn onClick={goToConnect}>가족 추가하기</AddBtn>
                        <CompleteBtn>우리 가족 완성!</CompleteBtn>
                    </ConnectBtnWrapper>
                </ConnectContentWrapper>
            </ConnectWrapper>
        </>
    )
}

export default ConnectComplete;

const ConnectWrapper = styled.div`
    width: 400px; 
    height: 840px;
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
    text-align: center;
    font-weight: 700;
    font-size: 20px; line-height: 24px;
    top: 50%; left: 50%;
    transform: translate(0%, 100%);
    display: flex; flex-direction: column;
    gap: 15px;
`;

const Img = styled.img`
    width: 380px; height: 220px;
    top: 50%; left: 50%;
    transform: translate(-4%, 80%);
`;

const ConnectBtnWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    top: 50%; left: 50%;
    gap: 10px;
    transform: translate(5%, 200%);
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