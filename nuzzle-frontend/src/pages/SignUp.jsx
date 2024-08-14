import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Controller, useForm } from "react-hook-form";
import { useState } from "react";
import Select from "react-select"
import axios from "axios";

// 회원가입 페이지

const years = Array.from({ length: 100 }, (_, i) => ({ value: 2024 - i, label: 2024 - i }));
const months = Array.from({ length: 12 }, (_, i) => ({ value: i + 1, label: i + 1 }));
const days = Array.from({ length: 31 }, (_, i) => ({ value: i + 1, label: i + 1 }));

const DatePickerWrapper = styled.div`
    display: flex;
    gap: 10px;
`;

const CustomDatePicker = ({ selectedDate, onChange }) => {
    const [year, setYear] = useState('년');
    const [month, setMonth] = useState('월');
    const [day, setDay] = useState('일');

    const handleYearChange = (option) => {
        setYear(option.value);
        onChange(new Date(option.value, month - 1, day));
    };

    const handleMonthChange = (option) => {
        setMonth(option.value);
        onChange(new Date(year, option.value - 1, day));
    };

    const handleDayChange = (option) => {
        setDay(option.value);
        onChange(new Date(year, month - 1, option.value));
    };

    return (
        <DatePickerWrapper>
            <Select
                options={years}
                value={years.find(y => y.value === year)}
                onChange={handleYearChange}
                placeholder="Year"
            />
            <Select
                options={months}
                value={months.find(m => m.value === month)}
                onChange={handleMonthChange}
                placeholder="Month"
            />
            <Select
                options={days}
                value={days.find(d => d.value === day)}
                onChange={handleDayChange}
                placeholder="Day"
            />
        </DatePickerWrapper>
    );
};


function SignUp() {

    const navigate = useNavigate();
    const backToLogin = () => { navigate('/login'); };
    const goToPolicy = () => { navigate('/policy'); };

    const [date, setDate] = useState(new Date());
    const [btnDisabled, setBtnDisabled] = useState(true);
    
    const {register, 
        handleSubmit, 
        control,
        formState: {errors, isValid}, 
        watch,
        getValues} = useForm({
            defaultValues: {
                gender: '',
                role: '',
                birthdate: new Date(),
                email: '',
                pw: '',
                pwconfirm: '',
            },
            mode: 'onChange'
        });

    const watchFields = watch(['name', 'gender', 'role', 'email', 'pw', 'pwconfirm']);

    const onSubmit = (data) => {
        console.log(data);
        navigate('/policy');
    };

    useEffect(() => {
        const allFieldsFilled = Object.values(watchFields).every(value => value);
        setBtnDisabled(!isValid || !allFieldsFilled);
    }, [watchFields, isValid]);

    const handleRegister = async (data) => {
        try {
            const response = await axios.post('http://localhost:8080/api/v1/auth/sign-up',{
                "name": data.name,
                "gender": data.gender,
                "role": data.role,
                "email": data.email,
                "password": data.pw,
                "pwconfirm": data.pwconfirm,
            });
            // setIsSignUp(true);
            console.log(response);
            } catch (error) {
                // setIsError(error.response.data.message);
                // console.error(error);
                // console.log(error.response.data.message);
            }
    };

    return (
        <>
            <SignUpWrapper>
                <SignUpContentWrapper>
                    <Top>
                        <BackBtn onClick={backToLogin}>{'<'}</BackBtn>
                        <ProgressBar>
                            <InnerProgreeBar style={{backgroundColor: '#FFB1D0'}}/><InnerProgreeBar/><InnerProgreeBar/>
                        </ProgressBar>
                    </Top>
                    <Title>나의 프로필을 작성해주세요</Title>
                    <SignUpForm onSubmit={handleSubmit(onSubmit)}>
                        <FormBox>
                            <FormTitle><span>이름</span>
                                       <span
                                            style={{color: '#FF84B0', 
                                                    fontWeight: '400',
                                                    fontSize: '12px',
                                                    lineHeight: '14.4px',
                                                    marginLeft: '20px'}}>가족에게 불리고 싶은 호칭을 적어주세요</span></FormTitle>
                            <FormInput placeholder="이름을 작성해 주세요"
                                       type="text"
                                       {...register('name', {required: '이름을 작성해 주세요', 
                                        maxLength: {
                                            value: 6,
                                            message: '이름은 최대 6자리까지 가능합니다.'
                                        }
                            })}></FormInput>
                            {errors.name && <ErrMsg>{errors.name.message}</ErrMsg>}
                        </FormBox>
                        <FormBox>
                            <FormTitle><span>성별</span></FormTitle>
                            <Controller name={'gender'}
                                            control={control}
                                            render={({field: {onChange, value}}) => (
                                                <FormBtnWrapper onChange={onChange} value={value}>
                                                    <FormBtn onClick={() => onChange('여자')}
                                                             selected={value === '여자'}>여자</FormBtn>
                                                    <FormBtn onClick={() => onChange('남자')}
                                                             selected={value === '남자'}>남자</FormBtn>
                                                    <FormBtn onClick={() => onChange('기타')}
                                                             selected={value === '기타'}>기타</FormBtn>
                                                </FormBtnWrapper>
                            )}></Controller>
                        </FormBox>
                        <FormBox>
                            <FormTitle><span>역할</span></FormTitle>
                            <Controller name={'role'}
                                            control={control}
                                            render={({field: {onChange, value}}) => (
                                                <FormBtnWrapper onChange={onChange} value={value}>
                                                    <FormBtn onClick={() => onChange('부모')}
                                                             selected={value === '부모'}>부모</FormBtn>
                                                    <FormBtn onClick={() => onChange('자녀')}
                                                             selected={value === '자녀'}>자녀</FormBtn>
                                                    <FormBtn onClick={() => onChange('기타')}
                                                             selected={value === '기타'}>기타</FormBtn>
                                                </FormBtnWrapper>
                            )}></Controller>
                        </FormBox>
                        <FormBox>
                            <FormTitle><span>생년월일</span></FormTitle>
                                <FormBtnWrapper>
                                    <Controller
                                        name="birthdate"
                                        control={control}
                                        render={({ field }) => (
                                            <CustomDatePicker selectedDate={date} onChange={(newDate) => {
                                                field.onChange(newDate);
                                                setDate(newDate);
                                            }} />
                                        )}
                                    />
                                </FormBtnWrapper>
                        </FormBox>
                        <FormBox>
                            <FormTitle><span>아이디</span></FormTitle>
                            <FormInput placeholder="로그인 시 사용할 이메일을 입력해주세요."
                                       type="text"
                                       {...register('email', {required: '로그인 시 사용할 이메일을 입력해주세요.', pattern: {
                                        value: /^\S+@\S+$/i,
                                        message: '올바른 이메일 형식이 아닙니다.'
                            }})}></FormInput>
                            {errors.email && <ErrMsg>{errors.email.message}</ErrMsg>}
                        </FormBox>
                        <FormBox>
                            <FormTitle><span>비밀번호</span></FormTitle>
                            <FormInput placeholder="8~20자 영문 숫자 특수문자 조합으로 입력해주세요."
                                       type="text"
                                       {...register('pw', {required: '8~20자 영문 숫자 특수문자 조합으로 입력해주세요.', pattern: {
                                        minLength: {
                                            value: 8,
                                            message: '비밀번호는 최소 8자리 이상이어야 합니다.'
                                        }, 
                                        maxLength: {
                                            value: 20,
                                            message: '비밀번호는 최대 20자리까지 가능합니다.'
                                        }, 
                                        validate: {
                                            combination: value => {
                                                const numberRegex = /\d/.test(value);
                                                const letterRegex = /[a-zA-Z]/.test(value);
                                                const specialCharRegex  = /[~!@#$%^&*()_+|<>?:{}]/.test(value);
                                                return numberRegex && letterRegex && specialCharRegex || '비밀번호는 영어, 숫자, 특수문자를 모두 포함해주세요.';
                                            }
                                        }
                            }})}></FormInput>
                            {errors.pw && <ErrMsg>{errors.pw.message}</ErrMsg>}
                        </FormBox>
                        <FormBox>
                            <FormTitle><span>비밀번호 확인</span></FormTitle>
                            <FormInput placeholder='비밀번호를 다시 입력해주세요.'
                                       type='text'
                                       {...register('pwconfirm', {required: '비밀번호를 다시 입력해주세요.', 
                                        validate: value => value === getValues('pw') || '비밀번호가 일치하지 않습니다.'
                            })}></FormInput>
                            {errors.pwconfirm && <ErrMsg>{errors.pwconfirm.message}</ErrMsg>}
                        </FormBox>
                        <NextBtn type="submit" disabled={btnDisabled}>다음</NextBtn>
                    </SignUpForm>
                </SignUpContentWrapper>
            </SignUpWrapper>
        </>
    )
}

export default SignUp;

const SignUpWrapper = styled.div`
    width: 375px; height: 812px;
    background-color: #FCFDF5;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    font-family: 'Pretendard';
    overflow: hidden;
    overflow-y: scroll;
`;

const SignUpContentWrapper = styled.div`
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
    text-align: left;
    padding-left: 25px;
    font-weight: 600;
    font-size: 20px; line-height: 24px;
    top: 50%; left: 50%;
    transform: translate(10%, 150%);
`;

const SignUpForm = styled.form`
    top: 50%; left: 50%;
    transform: translate(2%, 10%);
`;

const FormBox = styled.div`
    width: 316px;
    margin-bottom: 20px;
`;

const FormTitle = styled.div`
    font-weight: 600;
    font-size: 16px;
    line-height: 22.4px;
    text-align: left;
    margin-bottom: 5px;
    margin-left: 3px;
`;

const FormInput = styled.input`
    background-color: #F3F3F3;
    width: 305px; height: 60px;
    border-radius: 12px;
    border: none;
    font-weight: 700;
    font-size: 14px;
    line-height: 16.8px;
    padding-left: 10px;

    &::placeholder {
        color: #959595;
        font-weight: 600;
        font-size: 12px;
    }
`;

const FormBtnWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const FormBtn = styled.button`
    background-color: ${({ selected }) => selected ? '#FFB1D0' : '#F3F3F3'};
    color: ${({ selected }) => selected ? '#353535' : '#959595'};
    width: 100px; height: 57px;
    border-radius: 12px;
    border: none;
    font-weight: 700;
    font-size: 14px;
    line-height: 16.8px;
    padding-left: 10px;
`;

const NextBtn = styled.button`
    width: 315px; height: 50px;
    border-radius: 100px;
    background-color: #FFB1D0;
    top: 50%; left: 50%;
    transform: translate(-5%, 50%);
    font-weight: 700;
    font-size: 14px;
    line-height: 16.8px;
`;

const ErrMsg = styled.div`
    color: #FF4545;
    font-weight: 400;
    font-size: 12px;
    line-height: 14.4px;
    text-align: left;
    top: 50%; left: 50%;
    transform: translate(2%, 50%);
`;