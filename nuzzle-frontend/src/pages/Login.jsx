import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { GoStop } from "react-icons/go";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { login, selectIsLogin } from '../redux/userSlice';
import axios from "axios";

// 로그인

function Login() {

    const dispatch = useDispatch();
    const isLogin = useSelector(selectIsLogin);

    const navigate = useNavigate();
    const backToMain = () => { navigate("/"); };
    const goToFindId = () => { navigate("/help/findid"); };
    const goToFindPw = () => { navigate("/help/findpw"); };
    const goToSignUp = () => { navigate("/signup"); };

    const [idTrim, setIdTrim] = useState(true);
    const [pwTrim, setPwTrim] = useState(true);
    const [btnColor, setBtnColor] = useState("#DFDFDF")
    const [errMsg, setErrMsg] = useState(false);
    const [btnDisabled, setBtnDisabled] = useState(false);
    
    const isIdTrim = (data) => {
        setIdTrim(data.trim().length === 0);
    }

    const isPwTrim = (data) => {
        setPwTrim(data.trim().length === 0);
    }

    useEffect(() => {
        if (!idTrim && !pwTrim) {
            setBtnColor("#FFB1D0");
            setBtnDisabled(false);
        } else {
            setBtnColor("#DFDFDF");
            setBtnDisabled(true);
        }
    }, [idTrim, pwTrim]);

    const {
        register,
        handleSubmit,
        formState: {errors},
      } = useForm();

    //   const handleLogin = (data) => {
    //     // data.preventDefault();
    //     // 우선 username과 pw가 같을 때만 로그인 되게 설정
    //     if (data.username != data.pw){
    //         setErrMsg(true);
    //     }
    //     else {
    //         console.log(data);
    //         setErrMsg(false);
    //         // dispatch(loginUser({ username: data.username, password: data.pw }));
    //     }
    // };

    const handleLogin = (data) => {
        dispatch(login({ username: data.username, password: data.pw }));
    };

    useEffect(() => {
        if (isLogin) { // isAuthenticated 대신 isLogin 사용
            // navigate("/");
            
        }
    }, [isLogin, navigate]);

    const REST_API_KEY = '백엔드한테 달라하자1';
    const REDIRECT_URI = '백엔드한테 달라하자2';
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    const socialKakao = () => {
        window.location.href = kakaoURL;
    }

    // callback으로 받을 인가코드
    // const code = new URL(window.location.href).searchParams.get("code");
    // 나중에 API 연결

    return (
      <>
        <PageWrapper>
            <ContentWrapper>
                <BackBtn onClick={backToMain}>{'<'}</BackBtn>
                <Title><h3>로그인하기</h3></Title>
                <IdPwForm onSubmit={handleSubmit(handleLogin)}>
                    <InputBox placeholder="아이디 입력" 
                              type="text"
                              id="username" 
                              {...register('username', {required: '아이디 입력'})}
                              onChange={(e) => isIdTrim(e.target.value)}></InputBox>
                    <InputBox placeholder="비밀번호 입력" 
                              type="text" 
                              id="pw"
                              {...register('pw', {required: '비밀번호 입력'})}
                              onChange={(e) => isPwTrim(e.target.value)}></InputBox>
                    <ErrMsg style={{ display: errMsg? 'block' : 'none' }}><GoStop></GoStop>  아이디/비밀번호가 일치하지 않습니다.</ErrMsg>
                    <Btn style={{ backgroundColor: btnColor, marginLeft: '0', marginTop: '40px', marginBottom: '-20px' } }
                         disabled={btnDisabled}
                         type="submit">로그인</Btn>
                </IdPwForm>
                <Btn onClick={socialKakao} style={{backgroundColor:'#F7E300', color: '#371D1E'}}><Img src="img/kakao.png"></Img>카카오톡으로 로그인하기</Btn>
                <BtnWrapper>
                    <SmallBtn onClick={goToFindId}>아이디 찾기</SmallBtn>
                    <SmallBtn onClick={goToFindPw}>비밀번호 찾기</SmallBtn>
                    <SmallBtn onClick={goToSignUp}>회원가입</SmallBtn>
                    {/* <span>&nbsp;|&nbsp;</span> */}
                </BtnWrapper>
            </ContentWrapper>
        </PageWrapper>
      </>
    )
}
  
export default Login;

const PageWrapper = styled.div`
    width: 375px; height: 812px;
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
    font-size: 24px;
    line-height: 33.6px;
`;

const IdPwForm = styled.form`
    padding-left: 20px;
    display: flex; flex-direction: column;
    gap: 10px;
    top: 50%; left: 50%;
    transform: translate(0%, 10%);
    margin-bottom: 50px;
`;

const InputBox = styled.input`
    width: 305px; height: 60px;
    padding-left: 10px;
    border-radius: 12px;
    border: none;
    background-color: #F3F3F3;   
    font-family: 'Pretendard';
    font-weight: 600;
    font-size: 14px;
    line-height: 16.8px;
`;

const BtnWrapper = styled.div`
    display: flex; flex-direction: row;
    gap: 10px;
    justify-content: center;
    margin-top: 20px;
`;

const Btn = styled.button`
    width: 315px; height: 60px;
    padding: 21px, 11px, 21px, 11px;
    border-radius: 12px;
    background-color: #DFDFDF;
    margin: 3px;
    margin-left: 20px;
    font-weight: 600;
    font-size: 16px;
    line-height: 19.2px;
`;

const Img = styled.img`
    margin-right: 20px;
`;

const SmallBtn = styled.div`
    font-weight: 400;
    font-size: 12px;
    line-height: 14.4px;
    color: #959595;
    font-family: 'Pretendard';

    &:hover {
        cursor: pointer;
    }
`;

const ErrMsg = styled.div`
    color: #FF4545;
    font-weight: 400;
    font-size: 12px;
    line-height: 14.4px;
    text-align: left;
    display: none;
    top: 50%; left: 50%;
    transform: translate(0%, 0%);
`;