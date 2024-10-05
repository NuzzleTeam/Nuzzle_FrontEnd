import { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { GoStop } from "react-icons/go";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { login, selectIsLogin, setAccessToken , setPassword, setSerialId } from "../../features/userSlice";

// 로그인

function Login() {
  const dispatch = useDispatch();
  const isLogin = useSelector(selectIsLogin);

  const navigate = useNavigate();
  const goToFindId = () => {
    navigate("/help/findid");
  };
  const goToFindPw = () => {
    navigate("/help/findpw");
  };
  const goToSignUp = () => {
    navigate("/signup");
  };

  const [idTrim, setIdTrim] = useState(true);
  const [pwTrim, setPwTrim] = useState(true);
  const [btnColor, setBtnColor] = useState("#DFDFDF");
  const [errMsg, setErrMsg] = useState(false);
  const [btnDisabled, setBtnDisabled] = useState(false);


  const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  const targetUrl = "https://api.nuz2le.com/api/v1/auth/login";

  const isIdTrim = (data) => {
    setIdTrim(data.trim().length === 0);
  };

  const isPwTrim = (data) => {
    setPwTrim(data.trim().length === 0);
  };

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
    formState: { errors },
  } = useForm();

  const handleLogin = async (data) => {
    const formData = new FormData();
    formData.append("serial_id", data.userid);
    formData.append("password", data.pw);
  
    try {
      const response = await fetch(proxyUrl + targetUrl, {
        method: "POST",
        body: formData,  
      });
  
      if (!response.ok) {
        console.log(formData);
        for (let [key, value] of formData.entries()) {
          console.log(key, value);
        }
        console.error("서버 응답 오류:", response.status, response.statusText);
        setErrMsg(true);
        return;
      }
  
      const result = await response.json().catch((error) => {
        console.error("JSON 파싱 오류:", error);
        throw new Error("Invalid JSON response");
      });
  
      if (result.success) {
        console.log("로그인 성공:", result);
        dispatch(setAccessToken(result.data.access_token)); // 로그인 시 토큰 state에 저장 
        setErrMsg(false);
        dispatch(setSerialId(data.username)); // 로그인 id pw state 저장 
        dispatch(setPassword(data.pw));
        //dispatch(login({ username: data.username, password: data.pw }));
        navigate("/");
      } else {
        console.error("로그인 실패:", result.error);
        setErrMsg(true);
      }
    } catch (error) {
      console.error("오류 발생:", error);
      setErrMsg(true);
    }
  };

  useEffect(() => {
    if (isLogin) {
      // isAuthenticated 대신 isLogin 사용
      // navigate("/");
    }
  }, [isLogin, navigate]);

  const REST_API_KEY = "백엔드한테 달라하자1";
  const REDIRECT_URI = "백엔드한테 달라하자2";
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const socialKakao = () => {
    window.location.href = kakaoURL;
  };

  // callback으로 받을 인가코드
  // const code = new URL(window.location.href).searchParams.get("code");
  // 나중에 API 연결

  return (
    <>
      <PageWrapper>
        <ContentWrapper>
          <Title>로그인하기</Title>
          <IdPwForm onSubmit={handleSubmit(handleLogin)}>
            <InputBox
              placeholder="아이디 입력"
              type="text"
              id="userid"
              {...register("userid", { required: "아이디 입력" })}
              onChange={(e) => isIdTrim(e.target.value)}
            ></InputBox>
            <InputBox
              placeholder="비밀번호 입력"
              type="text"
              id="pw"
              {...register("pw", { required: "비밀번호 입력" })}
              onChange={(e) => isPwTrim(e.target.value)}
            ></InputBox>
            <ErrMsg style={{ display: errMsg ? "block" : "none" }}>
              <GoStop></GoStop> 아이디/비밀번호가 일치하지 않습니다.
            </ErrMsg>
            <Btn
              style={{
                backgroundColor: btnColor,
                marginLeft: "0",
                marginTop: "40px",
                marginBottom: "-20px",
              }}
              disabled={btnDisabled}
              type="submit"
            >
              로그인
            </Btn>
          </IdPwForm>
          <Btn
            onClick={socialKakao}
            style={{ backgroundColor: "#F7E300", color: "#371D1E" }}
          >
            <Img src="src/assets/img/kakao.png"></Img>카카오톡으로 로그인하기
          </Btn>
          <BtnWrapper>
            <SmallBtn onClick={goToFindId}>아이디 찾기</SmallBtn>
            <SmallBtn>|</SmallBtn>
            <SmallBtn onClick={goToFindPw}>비밀번호 찾기</SmallBtn>
            <SmallBtn>|</SmallBtn>
            <SmallBtn onClick={goToSignUp}>회원가입</SmallBtn>
            {/* <span>&nbsp;|&nbsp;</span> */}
          </BtnWrapper>
        </ContentWrapper>
      </PageWrapper>
    </>
  );
}

export default Login;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-color: #fcfdf5;
  box-sizing: border-box;
`;

const ContentWrapper = styled.div`
  width: 348px;
  height: 90%;
  top: 50%;
  left: 50%;
  transform: translate(3.8%, 2%);
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  text-align: left;
  padding-left: 0px;
  font-weight: bold;
  font-size: 24px;
  font-family: "Pretendard";
  line-height: 33.6px;
  margin-bottom: 40px;
`;

const IdPwForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 20px;
  width: 100%;
`;
const InputBox = styled.input`
  width: 305px;
  height: 60px;
  padding-left: 10px;
  border-radius: 12px;
  border: none;
  color: #353535;
  background-color: #f3f3f3;
  font-family: "Pretendard";
  font-weight: 600;
  font-size: 14px;
  line-height: 16.8px;

  &:focus {
    border: none;
    outline: none;
  }
`;

const BtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  margin-top: 20px;
  margin-left: -40px;
`;

const Btn = styled.button`
  width: 315px;
  height: 60px;
  border-radius: 12px;
  background-color: #dfdfdf;
  font-weight: 600;
  color: #353535;
  font-family: "Pretendard";
  font-size: 16px;
  line-height: 19.2px;
  margin-top: 5px;
  border: none;
`;

const Img = styled.img`
  position: relative;
  top: 5px;
  left: -5px;
`;

const SmallBtn = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 14.4px;
  color: #959595;
  font-family: "Pretendard";

  &:hover {
    cursor: pointer;
  }
`;

const ErrMsg = styled.div`
  color: #ff4545;
  font-weight: 400;
  font-size: 12px;
  line-height: 14.4px;
  text-align: left;
  display: none;
  top: 50%;
  left: 50%;
  transform: translate(0%, 0%);
`;
