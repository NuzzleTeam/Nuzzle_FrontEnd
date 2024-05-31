import styled from "styled-components";

function Signup () {
    return (
        <>
            <SignupWrapper>
                <SignupContent>
                    <Title><h4>회원가입 페이지</h4></Title>
                    <SignupForm>
                        <InputBox type="text" placeholder="이름을 입력해주세요"></InputBox>
                        <ErrorMsg></ErrorMsg>
                        <InputBox type="text" placeholder="이메일을 입력해주세요"></InputBox>
                        <ErrorMsg></ErrorMsg>
                        <InputBox type="text" placeholder="나이를 입력해주세요"></InputBox>
                        <ErrorMsg></ErrorMsg>
                        <InputBox type="password" placeholder="비밀번호를 입력해주세요"></InputBox>
                        <ErrorMsg></ErrorMsg>
                        <InputBox type="password" placeholder="비밀번호를 입력해주세요"></InputBox>
                        <div className="signup-submit">
                            <SubmitBtn>제출하기</SubmitBtn>
                        </div>
                    </SignupForm>               
                    <div className="backto-login">
                        <h5>이미 아이디가 있으신가요?</h5>
                        {/* <LinkLogin to='/' >로그인 페이지로 이동하기</LinkLogin> */}
                    </div>
                </SignupContent>
            </SignupWrapper>
        </>
    )
}

export default Signup;

const SignupWrapper = styled.div`
    margin: 0; padding: 0;
    width: 100%; height: 100%;
    position: relative;
    border: 1px solid red;
`;

 const SignupContent = styled.div`
    position: absolute;
    top: 50%; left: 50%;
    width: 70%; height: 80%;
    transform: translate(-50%, -50%);
    border: 2px solid green;
`;

const Title = styled.div`
    width: 100%; height: 10%;
`;

const SignupForm = styled.div`
    width: 100%; height: 70%;
    border: 2px solid skyblue;
    justify-content: center;
`;

const InputBox = styled.input` 
    width: 80%; height: 10%;
    padding: 0 0 0 4%;
    border: none;
    border-radius: 20px;
`;


const SubmitBtn = styled.button`
    width: 80%; height: 10%;
    border-radius: 20px;
    border: none;

`;

const ErrorMsg = styled.div`
    
`;

const LinkLogin = styled.link`
`;

// const signup_wrapper = styled.div`
    

// `;