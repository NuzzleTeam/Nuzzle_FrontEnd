import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

function Signup () {

    // const {
    //     register,
    //     handleSubmit,
    //     watch,
    //     formState: {errors},
    // } = useForm();

    const [errorVisible, setErrorVisible] = useState({
        name: false,
        email: false, emailFormat: false,
        age: false, ageFormat: false, agePositive: false, ageDigit: false, age19: false,
        pw: false, pw4: false, pw12: false, pwFormat: false,
        chpw: false, chpwSame: false
    });

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [pw, setPw] = useState('');
    const [chpw, setChpw] = useState('');
    const [notAllow, setNowAllow] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        if(!errorVisible.name &&
            !errorVisible.email && !errorVisible.emailFormat &&
            !errorVisible.age && !errorVisible.ageFormat && !errorVisible.agePositive && !errorVisible.ageDigit && !errorVisible.age19 &&
            !errorVisible.pw && !errorVisible.pw4 && !errorVisible.pw12 && !errorVisible.pwFormat &&
            !errorVisible.chpw && !errorVisible.chpwSame) {
            setNowAllow(false);
            return;
        }
        setNowAllow(true);
    }, [errorVisible]);

    // const handleSubmit = (e) => {
    //     let valid = false;
    //     e.preventDefault();
    //     if (name === '') {
    //         setErrorVisible(prev => ({ ...prev, name: true }));
    //         valid = false;
    //     }
    //     if (email === '') {
    //         setErrorVisible(prev => ({ ...prev, email: true }));
    //         valid = false;
    //     } else if (!email.includes('@')) {
    //         setErrorVisible(prev => ({ ...prev, emailFormat: true }));
    //         valid = false;
    //     }
    //     if (age === '') {
    //         setErrorVisible(prev => ({ ...prev, age: true }));
    //         valid = false;
    //     }
    //     if (pw === '') {
    //         setErrorVisible(prev => ({ ...prev, pw: true}));
    //         valid = false;
    //     }
    //     if (chpw === '') {
    //         setErrorVisible(prev => ({ ...prev, chpw: true}));
    //         valid = false;
    //     }
    // }

    const validName = (e) => {
        const value = e.target.value;
        const pattern_eng = /[a-zA-Z]/;	// 문자
        const pattern_kor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/; // 한글체크
        if (pattern_eng.test(value) || pattern_kor.test(value)){
            setErrorVisible((prev) => ({ ...prev, name: false }));
        }
        else{ setErrorVisible((prev) => ({ ...prev, name: true }));}
        setName(value);
    }

    const validEmail = (e) => {
        const value = e.target.value;
        if (value === '') {
            setErrorVisible(prev => ({ ...prev, email: true, emailFormat: false }));
        } else if (!value.includes('@')) {
            setErrorVisible(prev => ({ ...prev, email: false, emailFormat: true }));
        } else {
            setErrorVisible(prev => ({ ...prev, email: false, emailFormat: false }));
        }
        setEmail(value);
    }

    const validAge = (e) => {
        const value = e.target.value;
        const parsedValue = parseFloat(value);
        if (value === '') {
            setErrorVisible(prev => ({ ...prev, age: true, ageFormat: false, agePositive: false, ageDigit: false, age19: false }));
        } else if (isNaN(parsedValue)) {
            setErrorVisible(prev => ({ ...prev, age: false, ageFormat: true, agePositive: false, ageDigit: false, age19: false }));
        } else if (parsedValue <= 0) {
            setErrorVisible(prev => ({ ...prev, age: false, ageFormat: false, agePositive: true, ageDigit: false, age19: false }));
        } else if (!Number.isInteger(parsedValue)) {
            setErrorVisible(prev => ({ ...prev, age: false, ageFormat: false, agePositive: false, ageDigit: true, age19: false }));
        } else if (parsedValue < 19) {
            setErrorVisible(prev => ({ ...prev, age: false, ageFormat: false, agePositive: false, ageDigit: false, age19: true }));
        } else {
            setErrorVisible(prev => ({ ...prev, age: false, ageFormat: false, agePositive: false, ageDigit: false, age19: false }));
        }
        setAge(value);
    };

    const validPw = (e) => {
        const value = e.target.value;
        const pwRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&~])[A-Za-z\d~@$!%*#?&~]+$/;
        if (value === '') {
            setErrorVisible(prev => ({ ...prev, pw: true, pw4: false, pw12: false, pwFormat: false}));
        } else if (value.length < 4) {
            setErrorVisible(prev => ({ ...prev, pw: false, pw4: true, pw12: false, pwFormat: false}));
        } else if (value.length > 12) {
            setErrorVisible(prev => ({ ...prev, pw: false, pw4: false, pw12: true, pwFormat: false}));
        } else if (!pwRegex.test(value)) {
            setErrorVisible(prev => ({ ...prev, pw: false, pw4: false, pw12: false, pwFormat: true}));
        } else {
            setErrorVisible(prev => ({ ...prev, pw: false, pw4: false, pw12: false, pwFormat: false}));
        }
        setPw(value);
    }

    const validChpw = (e) => {
        const value = e.target.value;
        if (value === '') {
            setErrorVisible(prev => ({ ...prev, chpw: true, chpwSame: false}));
        } else if (value !== pw) {
            setErrorVisible(prev => ({ ...prev, chpw: false, chpwSame: true}));
        } else {
            setErrorVisible(prev => ({ ...prev, chpw: false, chpwSame: false}));
        }
        setChpw(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name);
        // 실제로 할 일 (예: 서버에 데이터 전송 등)
        navigate('/login'); // 성공적으로 제출되면 다른 페이지로 이동하도록 예시로 설정
    }

    return (
        <>
            <SignupWrapper>
                <SignupContent>
                    <Title><h4>회원가입 페이지</h4></Title>
                    <SignupForm>
                        <InputBox type="text" placeholder="이름을 입력해주세요" value={name} onChange={validName}></InputBox>
                        <ErrorMsg style={{ display: errorVisible.name ? 'block' : 'none' }}>이름을 입력해주세요!</ErrorMsg>
                        {/* <InputBox type="text" placeholder="아이디를 입력해주세요"></InputBox> */}
                        <InputBox type="text" placeholder="이메일을 입력해주세요" value={email} onChange={validEmail}></InputBox>
                        <ErrorMsg style={{ display: errorVisible.email ? 'block' : 'none' }}>이메일을 입력해주세요!</ErrorMsg>
                        <ErrorMsg style={{ display: errorVisible.emailFormat ? 'block' : 'none' }}>이메일 형식에 맞게 다시 입력해주세요!</ErrorMsg>
                        <InputBox type="text" placeholder="나이를 입력해주세요" value={age} onChange={validAge}></InputBox>
                        <ErrorMsg style={{ display: errorVisible.age ? 'block' : 'none' }}>나이를 입력해주세요!</ErrorMsg>
                        <ErrorMsg style={{ display: errorVisible.ageFormat ? 'block' : 'none' }}>나이는 숫자로 입력해주세요!</ErrorMsg>
                        <ErrorMsg style={{ display: errorVisible.agePositive ? 'block' : 'none' }}>나이는 양수여야 합니다.</ErrorMsg>
                        <ErrorMsg style={{ display: errorVisible.ageDigit ? 'block' : 'none' }}>나이를 실수로 입력할 수 없습니다.</ErrorMsg>
                        <ErrorMsg style={{ display: errorVisible.age19 ? 'block' : 'none' }}>19세 이상만 사용 가능합니다!</ErrorMsg>
                        <InputBox type="password" placeholder="비밀번호를 입력해주세요" value={pw} onChange={validPw}></InputBox>
                        <ErrorMsg style={{ display: errorVisible.pw ? 'block' : 'none' }}>비밀번호를 입력해주세요!</ErrorMsg>
                        <ErrorMsg style={{ display: errorVisible.pw4 ? 'block' : 'none' }}>최소 4자리 이상 입력해주세요.</ErrorMsg>
                        <ErrorMsg style={{ display: errorVisible.pw12 ? 'block' : 'none' }}>최대 12자리까지 입력 가능합니다.</ErrorMsg>
                        <ErrorMsg style={{ display: errorVisible.pwFormat ? 'block' : 'none' }}>비밀번호는 영어, 숫자, 특수문자를 포함해주세요.</ErrorMsg>
                        <InputBox type="password" placeholder="비밀번호 확인" value={chpw} onChange={validChpw}></InputBox>
                        <ErrorMsg style={{ display: errorVisible.chpw ? 'block' : 'none' }}>비밀번호를 다시 입력해주세요!</ErrorMsg>
                        <ErrorMsg style={{ display: errorVisible.chpwSame ? 'block' : 'none' }}>비밀번호가 일치하지 않습니다.</ErrorMsg>
                        <SubmitDiv>
                            <SubmitBtn type="submit" onClick={handleSubmit} disabled={notAllow}>제출하기</SubmitBtn>
                        </SubmitDiv>
                        <IdExist>
                            <h5>이미 아이디가 있으신가요?</h5>
                            <LinkLogin to='/login' ><h5>로그인 페이지로 이동하기</h5></LinkLogin>
                    </IdExist>
                    </SignupForm>               
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
`;

 const SignupContent = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 50%; left: 50%;
    width: 50%; height: 100%;
    transform: translate(-50%, -50%);
`;

const Title = styled.div`
    position: relative;
    width: 100%; height: 10%;
`;

const SignupForm = styled.form`
    position: relative;
    width: 100%; height: 90%;
`;

const InputBox = styled.input` 
    width: 80%; height: 8%;
    padding: 0 0 0 4%;
    border: none;
    border-radius: 20px;
    margin-bottom: 3%;
`;

const SubmitDiv = styled.div`
    width: 100%; height: 10%;
`;

const SubmitBtn = styled.button`
    width: 85%; height: 70%;
    border-radius: 20px;
    border: none;
    margin-top: 3%;
    margin-bottom: 3%;
    background-color: ${props => props.disabled ? '#ccc' : '#FEC623'}; 
    color: ${props => props.disabled ? '#666' : 'black'}; 
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
`;

const ErrorMsg = styled.div`
    color: #B43542;
    width: 80%;
    margin: 0 0 3% 10%;
    text-align: left;
    display: none;
`;

const IdExist = styled.div`
    margin-top: 3%;
    display: flex;
    text-align: center;
    position: absolute;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    gap: 10%;
    left: 50%;
    width: 100%;
    transform: translate(-50%, -10%);
`

const LinkLogin = styled(Link)`
    text-decoration: none;
    color: white;
    white-space: nowrap;
`;