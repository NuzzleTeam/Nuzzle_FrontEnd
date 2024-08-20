import { useEffect, useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

// 비밀번호 변경

function ChangePw() {

    const navigate = useNavigate();
    const backToLogin = () => { navigate("/login"); };

    const [btnDisabled, setBtnDisabled] = useState(true);
    const [btnColor, setBtnColor] = useState("DFDFDF");
    const [showErrMsg, setShowErrMsg] = useState(null);
    const [chpwTrim, setChpwTrim] = useState(true);
    const [confirmChpwTrim, setConfirmChpwTrim] = useState(true);
    const [borderColor, setBorderColor] = useState(null);
    const [fontColor, setFontColor] = useState(null);

    const {
        register,
        handleSubmit,
        formState: {errors},
        getValues,
      } = useForm();

    const onSubmit = (data) => {
        const {chpw, confirmchpw} = data;
        if (chpw === confirmchpw) {
            setShowErrMsg(false);
            setBorderColor("none");
            setFontColor("black");
            console.log(data);
        }
        else {
            setShowErrMsg(true);
            setBorderColor("#FF4545");
            setFontColor("#FF4545");
        }
    };

    const isChpwTrim = (data) => {
        setChpwTrim(data.trim().length === 0);
    }

    const isConfirmChpwTrim = (data) => {
        setConfirmChpwTrim(data.trim().length === 0);
    }

    useEffect(() => {
        if (!chpwTrim && !confirmChpwTrim) {
            setBtnColor("#FFB1D0");
            setBtnDisabled(false);
        } else {
            setBtnColor("#DFDFDF");
            setBtnDisabled(true);
        }
    }, [chpwTrim, confirmChpwTrim]);

    return (
      <>
        <PageWrapper>
            <ContentWrapper>
                <Title>비밀번호 변경하기</Title>
                <ConfirmBox onSubmit={handleSubmit(onSubmit)}>
                    <Letter><h5>변경할 비밀번호</h5></Letter>
                    <FormInput placeholder="01012345678"
                               type="text"
                               id="chpw"
                               {...register('chpw', {required: '변경할 비밀번호'})}
                               onChange={(e) => isChpwTrim(e.target.value)}></FormInput>
                               
                    <Letter><h5>비밀번호 확인</h5></Letter>
                    <FormInput placeholder="01012345678"
                               type="text"
                               id="confirmchpw"
                               {...register('confirmchpw', {required: '비밀번호 확인'})}
                               onChange={(e) => isConfirmChpwTrim(e.target.value)}></FormInput>

                    {showErrMsg !== null && <ErrMsg style={{color: fontColor}}>{showErrMsg ? '비밀번호가 일치하지 않습니다' : '비밀번호가 일치합니다'}</ErrMsg>}

                    <Btn type="submit" style={{backgroundColor: btnColor}} disabled={btnDisabled} onClick={backToLogin}>인증 완료</Btn>
                </ConfirmBox>
            </ContentWrapper>
        </PageWrapper>
      </>
    )
}
  
export default ChangePw;

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
    padding-left: 15px;
    font-family: 'Pretendard';
    font-weight: 700;
    font-size: 24px; line-height: 33.6px;
`;

const Letter = styled.div`
    text-align: left;
    font-family: 'Pretendard';
    padding-left: 20px;
    font-weight: 600;
    font-size: 16px; line-height: 22.4px;
    top: 50%; left: 50%;
    transform: translate(-7%, 5%);
`;

const ConfirmBox = styled.form`
    padding-left: 20px;
    display: flex; flex-direction: column;
    gap: 0px;
`;

const FormInput = styled.input`
    width: 315px; height: 60px;
    padding-left: 12px;
    border-radius: 12px;
    border: none;
    background-color: #F3F3F3;
    font-family: 'Pretendard';
    font-size: 14px; line-height: 16.8px;
    font-weight:600;
    top: 50%; left: 50%;
    transform: translate(-2.5%, -30%);
`;

const Btn = styled.button`
    width: 315px; height: 50px;
    border-radius: 100px;
    background-color: #DFDFDF;
    border:none;
    color:#353535;
    font-weight: 700;
    font-size: 14px; line-height: 16.8px;
    margin: 10px; margin-left: 25px;
    top: 50%; left: 50%;
    transform: translate(-8%, 0%);
    font-family: 'Pretendard';
`;

const ErrMsg = styled.div`
    text-align: left;
    top: 50%; left: 50%;
    transform: translate(1%, -90%);
`;