import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// 사이트 접속 페이지 (첫 화면)

function FirstPage() {

    const navigate = useNavigate();
    const startNuzzle = () => {
        navigate("/login");
    };

    return (
        <>
            <PageWrapper>
                <ContentWrapper>
                    <Top>
                        <img 
                            width={'61px'}
                            height={'35px'}
                            src="src/assets/img/upside_nuzzle.png"/>
                        <img 
                            width={'69.11px'}
                            height={'12px'}
                            src="src/assets/img/nuzzle.png"/>
                    </Top>
                    <Middle>
                        <Bubble>하루 한 번, 우리 가족 일상 엿보기</Bubble>
                        <img src="src/assets/img/main_character.png"/>
                    </Middle>
                    <Bottom>
                        <StartBtn onClick={startNuzzle}>누즐 시작하기</StartBtn>
                    </Bottom>
                </ContentWrapper>
            </PageWrapper>
        </>
    )
}

export default FirstPage;

const PageWrapper = styled.div`
    width: 375px; height: 812px;
    background-color: #FCFDF5;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
`;

const ContentWrapper = styled.div`
    width: 348px; height: 90%;
    top: 50%; left: 50%;
    transform: translate(3.8%, 2%);
    display: flex; flex-direction: column;
`;

const Top = styled.div`
    display: flex; flex-direction: column;
    align-items: center;
    gap: 7px;
    top: 50%; left: 50%;
    transform: translate(0%, 70%);
`;

const Middle = styled.div`
    top: 50%; left: 50%;
    transform: translate(1%, 80%);
`;

const Bottom = styled.div`
    top: 50%; left: 50%;
    transform: translate(0%, 550%);
`;

const StartBtn = styled.button`
    width: 315px; height: 60px;
    border-radius: 12px;
    padding: 21px, 11px, 21px, 11px;
    background-color: #FFB1D0;
    font-family: 'Pretendard';
    font-weight: 600;
    font-size: 16px;
    line-height: 19.2px;
`;

const Bubble = styled.div`
    width: 222px; height: 40px;
    border-radius: 30px;
    background-color:#353535;
    font-size: 12px;
    top: 50%; left: 50%;
    transform: translate(30%, -100%);
    color: #FFB1D0;
    font-family: 'Pretendard';
    font-weight: 700;
    font-size: 12px;
    line-height: 38px;

    &:after {
        content: '';
        position: absolute;
        border-style: solid;
        border-width: 15px 10px 0;
        border-color: #353535 transparent;
        display: block;
        width: 0;
        z-index: 1;
        bottom: -14px;
        left: 100px;
    }
`;