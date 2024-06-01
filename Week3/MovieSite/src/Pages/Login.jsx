import NavBar from "../MovieSite/NavBar";
import styled from "styled-components";

function Login () {
    return (
        <>
            <LoginWrapper>
                <LoginContent>
                    <Title><h3>로그인 페이지</h3></Title>
                    <LoginForm>
                        <InputBox placeholder="아이디"></InputBox>
                        <InputBox placeholder="비밀번호"></InputBox>
                        <LoginBtn>로그인</LoginBtn>
                    </LoginForm>
                </LoginContent>
            </LoginWrapper>
        </>
    )
}

export default Login;

const LoginWrapper = styled.div`
    margin: 0; padding: 0;
    width: 100%; height: 100%;
    position: relative;
`;

const LoginContent = styled.div`
    margin: 0; padding: 0;
    width: 65%; height: 50%;
    position: absolute;
    top: 10%; left: 50%;
    transform: translate(-50%, -10%);
`;

const Title = styled.div`
    width: 100%; height: 15%;
`;

const LoginForm = styled.form`
    width: 100%; height: 65%;
    margin-top: 5%;
`;

const InputBox = styled.input`
    width: 80%; height: 20%;
    padding: 0 0 0 4%;
    border: none;
    border-radius: 20px;
    margin-bottom: 3%;
`;

const LoginBtn = styled.button`
    width: 85%; height: 20%;
    border-radius: 20px;
    border: none;
    margin-top: 7%;
`;