import React from "react";
import { Controller, useForm, useController } from "react-hook-form";
import { Form } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import Select from "react-select"


const years = Array.from({ length: 100 }, (_, i) => ({ value: 2024 - i, label: 2024 - i }));
const months = Array.from({ length: 12 }, (_, i) => ({ value: i + 1, label: i + 1 }));
const days = Array.from({ length: 31 }, (_, i) => ({ value: i + 1, label: i + 1 }));

const DatePickerWrapper = styled.div`
    display: flex;
    gap: 10px;
`;

const CustomDatePicker = ({ selectedDate, onChange }) => {
    const [year, setYear] = useState(selectedDate.getFullYear());
    const [month, setMonth] = useState(selectedDate.getMonth() + 1);
    const [day, setDay] = useState(selectedDate.getDate());

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


// 사이트 접속 페이지 (첫 화면)

function KakaoLogin() {

    const [gender, setGender] = useState("");
    const selectGender = (data) => {
        setGender(data.target.value);
    }
    const [date, setDate] = useState(new Date());
    const [btnDisabled, setBtnDisabled] = useState(true);

    const {register, 
        handleSubmit, 
        control,
        formState: {errors, isValid}, 
        watch,} = useForm({
            defaultValues: {
                gender: '',
                role: '',
                birthdate: new Date(),
            },
            mode: 'onChange'
        });

    const watchFields = watch(['name', 'gender', 'role',]);

    const onSubmit = (data) => {
        if (data) {
            console.log(data);
        }
    };

    useEffect(() => {
        const allFieldsFilled = Object.values(watchFields).every(value => value);
        setBtnDisabled(!isValid || !allFieldsFilled);
    }, [watchFields, isValid]);

    return (
        <>
            <KakaoLoginWrapper>
                <KakaoLoginContentWrapper>
                    <Top>
                        <BackBtn>{'<'}</BackBtn>
                        <ProgressBar>
                            <InnerProgreeBar style={{backgroundColor: '#FFB1D0'}}/><InnerProgreeBar/><InnerProgreeBar/>
                        </ProgressBar>
                    </Top>
                    <Title>나의 프로필을 작성해주세요</Title>
                    <KakaoLoginForm onSubmit={handleSubmit(onSubmit)}>
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
                        </FormBox>
                        <FormBox>
                            <FormTitle><span>성별</span></FormTitle>
                            <Controller name={'gender'}
                                            control={control}
                                            render={({field: {onChange, value}}) => (
                                                <FormBtnWrapper onChange={onChange} value={value}>
                                                    <FormBtn onClick={() => onChange('F')}
                                                             selected={value === 'F'}>여자</FormBtn>
                                                    <FormBtn onClick={() => onChange('M')}
                                                             selected={value === 'M'}>남자</FormBtn>
                                                    <FormBtn onClick={() => onChange('else')}
                                                             selected={value === 'else'}>기타</FormBtn>
                                                </FormBtnWrapper>
                            )}></Controller>
                        </FormBox>
                        <FormBox>
                            <FormTitle><span>역할</span></FormTitle>
                            <Controller name={'role'}
                                            control={control}
                                            render={({field: {onChange, value}}) => (
                                                <FormBtnWrapper onChange={onChange} value={value}>
                                                    <FormBtn onClick={() => onChange('parent')}
                                                             selected={value === 'parent'}>부모</FormBtn>
                                                    <FormBtn onClick={() => onChange('child')}
                                                             selected={value === 'child'}>자녀</FormBtn>
                                                    <FormBtn onClick={() => onChange('else')}
                                                             selected={value === 'else'}>기타</FormBtn>
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
                    </KakaoLoginForm>
                    <NextBtn type="submit">다음</NextBtn>
                </KakaoLoginContentWrapper>
            </KakaoLoginWrapper>
        </>
    )
}

export default KakaoLogin;

const KakaoLoginWrapper = styled.div`
    width: 375px; height: 812px;
    background-color: #FCFDF5;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    font-family: 'Pretendard';
`;

const KakaoLoginContentWrapper = styled.div`
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

const KakaoLoginForm = styled.form`
    top: 50%; left: 50%;
    transform: translate(5%, 20%);
    
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
    color: #959595;
`;

const NextBtn = styled.button`
    width: 315px; height: 50px;
    border-radius: 100px;
    background-color: #DFDFDF;
    top: 50%; left: 50%;
    transform: translate(0%, 450%);
    font-weight: 700;
    font-size: 14px;
    line-height: 16.8px;
`;