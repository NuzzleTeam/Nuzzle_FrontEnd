import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// 사이트 접속 페이지 (첫 화면)

function FirstPage() {

    const navigate = useNavigate();
    const startNuzzle = () => {
        navigate("/login");
    };

    return (
        <PageWrapper>
            <ContentWrapper>
                <Top>
                    <img 
                        width={'64px'}
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
    )
}

export default FirstPage;

const PageWrapper = styled.div`
    width: 400px; 
    height: 840px;
    background-color: #FCFDF5;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    align-items: center; 
`;

const ContentWrapper = styled.div`
    width: 348px; 
    height: 90%;
    display: flex; 
    flex-direction: column;
    align-items: center;
    justify-content: center; 
`;

const Top = styled.div`
    display: flex; 
    flex-direction: column;
    align-items: center;
    gap: 7px;
    padding-top: 40px; 
`;

const Middle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: relative;
`;

const Bottom = styled.div`
    display: flex;
    justify-content: center;
`;

const StartBtn = styled.button`
    width: 375px; 
    height: 60px;
    border-radius: 12px;
    padding: 21px 11px; 
    background-color: #FFB1D0;
    font-family: 'Pretendard';
    font-weight: 600;
    font-size: 16px;
    line-height: 19.2px;
`;

const Bubble = styled.div`
    position: relative;
    width: 222px; 
    height: 40px;
    border-radius: 30px;
    background-color: #353535;
    color: #FFB1D0;
    font-family: 'Pretendard';
    font-weight: 700;
    font-size: 12px;
    line-height: 38px;
    display: flex;
    justify-content: center;
    align-items: center;

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
        left: calc(50% - 10px); 
    }
`;
