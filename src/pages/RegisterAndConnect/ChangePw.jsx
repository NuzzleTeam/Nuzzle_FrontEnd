import { useEffect, useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Stop from "/src/assets/stop.png";

// 비밀번호 변경

function ChangePw() {
  const navigate = useNavigate();
  const backToLogin = () => {
    navigate("/login");
  };

  const [btnDisabled, setBtnDisabled] = useState(true);
  const [btnColor, setBtnColor] = useState("DFDFDF");
  const [showErrMsg, setShowErrMsg] = useState(false);  // Initially set to false
  const [chpwTrim, setChpwTrim] = useState(true);
  const [confirmChpwTrim, setConfirmChpwTrim] = useState(true);
  const [borderColor, setBorderColor] = useState(null);
  const [fontColor, setFontColor] = useState(null);
  const [passwordsMatch, setPasswordsMatch] = useState(true);  // State to check if passwords match

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const onSubmit = (data) => {
    const { chpw, confirmchpw } = data;
    // Submit logic will stay the same
    console.log(data);
  };

  const isChpwTrim = (data) => {
    setChpwTrim(data.trim().length === 0);
  };

  const isConfirmChpwTrim = (data) => {
    setConfirmChpwTrim(data.trim().length === 0);
  };

  const checkPasswordsMatch = (chpw, confirmchpw) => {
    if (chpw !== confirmchpw) {
      setPasswordsMatch(false);
      setShowErrMsg(true);
      setFontColor("#FF4545");
      setBorderColor("#FF4545");
    } else {
      setPasswordsMatch(true);
      setShowErrMsg(false);
      setFontColor("black");
      setBorderColor("none");
    }
  };

  const handleChpwChange = (e) => {
    const chpw = e.target.value;
    const confirmchpw = getValues("confirmchpw"); // Get current value of confirmchpw field
    isChpwTrim(chpw);
    checkPasswordsMatch(chpw, confirmchpw);
  };

  const handleConfirmChpwChange = (e) => {
    const confirmchpw = e.target.value;
    const chpw = getValues("chpw"); // Get current value of chpw field
    isConfirmChpwTrim(confirmchpw);
    checkPasswordsMatch(chpw, confirmchpw);
  };

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
    <PageWrapper>
      <ContentWrapper>
        <Title>비밀번호 변경하기</Title>
        <ConfirmBox onSubmit={handleSubmit(onSubmit)}>
          <Letter>변경할 비밀번호</Letter>
          <FormInput
            placeholder="비밀번호를 입력하세요"
            type="password"
            id="chpw"
            {...register("chpw", { required: "변경할 비밀번호" })}
            onChange={handleChpwChange}  // Updated event handler
          />

          <Letter>비밀번호 확인</Letter>
          <FormInput
            placeholder="비밀번호 확인"
            type="password"
            id="confirmchpw"
            {...register("confirmchpw", { required: "비밀번호 확인" })}
            onChange={handleConfirmChpwChange}  // Updated event handler
          />

          {showErrMsg && !passwordsMatch && (
            <ErrMsg style={{ color: fontColor }}>
            <StopImage src={Stop} alt="Stop Icon" />
            비밀번호가 일치하지 않습니다
            </ErrMsg>
          )}

          <Btn
            type="submit"
            style={{ backgroundColor: btnColor }}
            disabled={btnDisabled}
            onClick={backToLogin}
          >
            인증 완료
          </Btn>
        </ConfirmBox>
      </ContentWrapper>
    </PageWrapper>
  );
}

export default ChangePw;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-color: #fcfdf5;
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
  padding-left: 20px;
  font-weight: 700;
  font-size: 24px;
  line-height: 33.6px;
  font-family: "Pretendard";
  top: 50%;
  left: 50%;
  transform: translate(0%, -5%);
  margin-top : 0px;
  margin-bottom: 23px;
`;

const Letter = styled.div`
  text-align: left;
  font-family: "Pretendard";  
  padding-left: 10px;
  font-weight: 600;
  font-size: 16px;
  line-height: 22.4px;
  margin-bottom:8px;
  
`;
const ConfirmBox = styled.form`
  padding-left: 20px;
  display: flex;
  flex-direction: column;
`;

const FormInput = styled.input`
  width: 315px;
  height: 60px;
  padding-left: 12px;
  border-radius: 12px;
  border: ${(props) => (props.isError ? "1px solid #FF4545" : "none")};
  background-color: #f3f3f3;
  font-family: "Pretendard";
  font-size: 14px;
  font-weight: 600;
  line-height: 16.8px;
  margin-bottom: 20px;
  &:focus {
    outline: none;
    border: 1px solid #ffb1d0;
  }
`;

const Btn = styled.button`
  width: 315px;
  height: 50px;
  border-radius: 100px;
  background-color: #dfdfdf;
  border: none;
  color: #353535;
  font-weight: 700;
  font-size: 14px;
  line-height: 16.8px;
  margin: 10px 0; /* Reduced margin to be more consistent */
  font-family: "Pretendard";
`;

const ErrMsg = styled.div`
  display: flex;  
  text-align: left;
  font-size: 12px;
  font-family: "Pretendard";
  font-weight: 400;
`;

const StopImage = styled.img`
  width: 20px;        
  height: 20px;      
  margin-right: 3px;   
  margin-top:-3px;
`;