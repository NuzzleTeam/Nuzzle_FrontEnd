import React, { useEffect } from "react";
import { Form } from "react-router-dom";
import styled from "styled-components";
import { Controller, useForm } from "react-hook-form";
import { useController } from "react-hook-form";
import DatePicker from "react-datepicker";
import { useState } from "react";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login, setUserId, setFamilyId, setInvitationCode } from "../../features/userSlice"; 


// 회원가입 페이지

const years = Array.from({ length: 100 }, (_, i) => ({
  value: 2024 - i,
  label: 2024 - i,
}));
const months = Array.from({ length: 12 }, (_, i) => ({
  value: i + 1,
  label: i + 1,
}));
const days = Array.from({ length: 31 }, (_, i) => ({
  value: i + 1,
  label: i + 1,
}));

const customStyles = {
  control: (provided) => ({
    ...provided,
    border: "none",
    boxShadow: "none",
    "&:hover": {
      border: "none",
    },
    backgroundColor: "transparent",
  }),
};

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
        value={years.find((y) => y.value === year)}
        onChange={handleYearChange}
        placeholder="Year"
        styles={customStyles}
      />
      <Select
        options={months}
        value={months.find((m) => m.value === month)}
        onChange={handleMonthChange}
        placeholder="Month"
        styles={customStyles}
      />
      <Select
        options={days}
        value={days.find((d) => d.value === day)}
        onChange={handleDayChange}
        placeholder="Day"
        styles={customStyles}
      />
    </DatePickerWrapper>
  );
};

function SignUp() {
  const [date, setDate] = useState(new Date());
  const [btnDisabled, setBtnDisabled] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  const signUpUrl = "https://api.nuz2le.com/api/v1/auth/sign-up";
  
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
    watch,
    getValues,
  } = useForm({
    defaultValues: {
      gender: "",
      role: "",
      birthdate: new Date(),
      email: "",
      pw: "",
      pwconfirm: "",
    },
    mode: "onChange",
  });

  const watchFields = watch([
    "name",
    "gender",
    "role",
    "email",
    "pw",
    "pwconfirm",
  ]);

  const isFormValid = () => {
    return (
      watchFields.name &&
      watchFields.gender &&
      watchFields.role &&
      watchFields.email &&
      watchFields.pw &&
      watchFields.pwconfirm &&
      isValid
    );
  };

  const onSubmit = async (data) => {
    const payload = {
        serial_id: data.email,
        password: data.pw,
        user_name: data.name,
        gender: data.gender.toUpperCase(),
        birth_date: `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`,
        role: data.role.toUpperCase(),
    };

    try {
        const response = await fetch(proxyUrl + signUpUrl, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        const result = await response.json();

        if (result.success) {
            console.log("회원가입 성공:", result);
            navigate("/policy");// 성공하면 이동 
          
        } else {
            console.log(JSON.stringify(payload, null, 2));
            console.error("회원가입 실패:", result.error || "Unknown error");
        }
    } catch (error) {
        console.error("오류 발생:", error.message || error);
    }
};

  useEffect(() => {
    const allFieldsFilled = Object.values(watchFields).every((value) => value);
    setBtnDisabled(!isValid || !allFieldsFilled);
  }, [watchFields, isValid]);

  return (
    <SignUpWrapper>
      <SignUpContentWrapper>
        <Top>
          <ProgressBar>
            <InnerProgreeBar style={{ backgroundColor: "#FFB1D0" }} />
            <InnerProgreeBar />
            <InnerProgreeBar />
          </ProgressBar>
        </Top>
        <Title>나의 프로필을 작성해주세요</Title>
        <SignUpForm onSubmit={handleSubmit(onSubmit)}>
          <FormBox>
            <FormTitle>
              {" "}
              이름
              <span
                style={{
                  color: "#FF84B0",
                  fontWeight: "400",
                  fontSize: "12px",
                  lineHeight: "14.4px",
                  fontFamily: "Pretendard",
                  marginLeft: "20px",
                }}
              >
                가족에게 불리고 싶은 호칭을 적어주세요
              </span>
            </FormTitle>
            <FormInput
              placeholder="이름을 작성해 주세요"
              type="text"
              {...register("name", {
                required: "이름을 작성해 주세요",
                maxLength: {
                  value: 6,
                  message: "이름은 최대 6자리까지 가능합니다.",
                },
              })}
            />
            {/* {errors.name && <ErrMsg>{errors.name.message}</ErrMsg>} */}
          </FormBox>
          <FormBox>
            <FormTitle>성별</FormTitle>
            <Controller
              name={"gender"}
              control={control}
              render={({ field: { onChange, value } }) => (
                <FormBtnWrapper onChange={onChange} value={value}>
                  <FormBtn
                    type="button"
                    onClick={() => onChange("FEMALE")}
                    selected={value === "FEMALE"}
                  >
                    여자
                  </FormBtn>
                  <FormBtn
                    type="button"
                    onClick={() => onChange("MALE")}
                    selected={value === "MALE"}
                  >
                    남자
                  </FormBtn>
                  <FormBtn
                    type="button"
                    onClick={() => onChange("else")}
                    selected={value === "else"}
                  >
                    기타
                  </FormBtn>
                </FormBtnWrapper>
              )}
            />
          </FormBox>
          <FormBox>
            <FormTitle>역할</FormTitle>
            <Controller
              name={"role"}
              control={control}
              render={({ field: { onChange, value } }) => (
                <FormBtnWrapper onChange={onChange} value={value}>
                  <FormBtn
                    type="button"
                    onClick={() => onChange("parent")}
                    selected={value === "parent"}
                  >
                    부모
                  </FormBtn>
                  <FormBtn
                    type="button"
                    onClick={() => onChange("child")}
                    selected={value === "child"}
                  >
                    자녀
                  </FormBtn>
                  <FormBtn
                    type="button"
                    onClick={() => onChange("else")}
                    selected={value === "else"}
                  >
                    기타
                  </FormBtn>
                </FormBtnWrapper>
              )}
            />
          </FormBox>
          <FormBox>
            <FormTitle>생년월일</FormTitle>
            <Controller
              name="birthdate"
              control={control}
              render={({ field: { onChange, value } }) => (
                <CustomDatePicker
                  selectedDate={value || new Date()}
                  onChange={onChange}
                />
              )}
            />
          </FormBox>

          <FormBox>
            <FormTitle>아이디</FormTitle>
            <FormInput
              placeholder="로그인 시 사용할 이메일을 입력해주세요."
              type="text"
              {...register("email", {
                required: "로그인 시 사용할 이메일을 입력해주세요.",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "올바른 이메일 형식이 아닙니다.",
                },
              })}
            />
          </FormBox>
          <FormBox>
            <FormTitle>비밀번호</FormTitle>
            <FormInput
              placeholder="8~20자 영문 숫자 특수문자 조합으로 입력해주세요."
              type="text"
              {...register("pw", {
                required: "8~20자 영문 숫자 특수문자 조합으로 입력해주세요.",
                pattern: {
                  minLength: {
                    value: 8,
                    message: "비밀번호는 최소 8자리 이상이어야 합니다.",
                  },
                  maxLength: {
                    value: 20,
                    message: "비밀번호는 최대 20자리까지 가능합니다.",
                  },
                  validate: {
                    combination: (value) => {
                      const numberRegex = /\d/.test(value);
                      const letterRegex = /[a-zA-Z]/.test(value);
                      const specialCharRegex = /[~!@#$%^&*()_+|<>?:{}]/.test(
                        value
                      );
                      return (
                        (numberRegex && letterRegex && specialCharRegex) ||
                        "비밀번호는 영어, 숫자, 특수문자를 모두 포함해주세요."
                      );
                    },
                  },
                },
              })}
            />
          </FormBox>
          <FormBox>
            <FormTitle>비밀번호 확인</FormTitle>
            <FormInput
              placeholder="비밀번호를 다시 입력해주세요."
              type="text"
              {...register("pwconfirm", {
                required: "비밀번호를 다시 입력해주세요.",
                validate: (value) =>
                  value === getValues("pw") || "비밀번호가 일치하지 않습니다.",
              })}
            />
          </FormBox>
          <NextBtn type="submit" disabled={btnDisabled}>
            다음
          </NextBtn>
        </SignUpForm>
      </SignUpContentWrapper>
    </SignUpWrapper>
  );
}

export default SignUp;

const DatePickerWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  padding: 20px;
  background-color: #f3f3f3;
  border-radius: 10px;
`;

const SignUpWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #fcfdf5;
  display: flex;
  flex-direction: column;
  font-family: "Pretendard";
  overflow: hidden;
  justify-content: flex-start;
  align-items: center;
  padding-top: 20px;
`;

const SignUpContentWrapper = styled.div`
  width: 348px;
  margin: 0 auto;
  padding: 0px 20px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Top = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProgressBar = styled.div`
  width: 229px;
  height: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
`;

const InnerProgreeBar = styled.div`
  width: 76.33px;
  height: 6px;
  background-color: #d9d9d9;
`;

const Title = styled.div`
  text-align: center;
  font-weight: 700;
  font-family: "Pretendard";
  font-size: 20px;
  line-height: 24px;
  margin-top: 10px;
`;

const SignUpForm = styled.form`
  transform: none;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormBox = styled.div`
  width: 316px;
  margin-bottom: 20px;
`;

const FormTitle = styled.div`
  font-weight: 600;
  font-family: "Pretendard";
  font-size: 16px;
  line-height: 22.4px;
  text-align: left;
  margin-bottom: 5px;
  margin-left: 3px;
`;

const FormInput = styled.input`
  background-color: #f3f3f3;
  width: 305px;
  height: 60px;
  border-radius: 12px;
  border: none;
  font-family: "Pretendard";
  font-weight: 700;
  font-size: 14px;
  line-height: 16.8px;
  padding-left: 10px;

  &::placeholder {
    color: #959595;
    font-weight: 600;
    font-size: 12px;
  }
  &:focus {
    border: none;
    outline: none;
  }
`;

const FormBtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const FormBtn = styled.button`
  background-color: ${({ selected }) => (selected ? "#FFB1D0" : "#F3F3F3")};
  color: ${({ selected }) => (selected ? "#353535" : "#959595")};
  width: 100px;
  height: 57px;
  border-radius: 12px;
  border: none;
  font-weight: 700;
  font-size: 14px;
  font-family: "Pretendard";
  line-height: 16.8px;
  padding-left: 10px;
`;

const BirthInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 7px;
`;

const BirthInput = styled.input`
  background-color: #f3f3f3;
  color: #959595;

  width: 95px;
  height: 57px;
  border-radius: 12px;
  border: none;
  font-weight: 700;
  font-size: 14px;
  font-family: "Pretendard";
  line-height: 16.8px;
  text-align: right;
  margin-right: 3px;

  &:focus {
    border: none;
    outline: none;
    color: #353535;
    text-align: center;
  }

  &:not(:placeholder-shown) {
    color: #353535;
    text-align: center;
  }
`;

const NextBtn = styled.button`
  width: 315px;
  height: 50px;
  border-radius: 100px;
  background-color: #ffb1d0;
  color: #353535;
  font-family: "Pretendard";
  font-weight: 700;
  font-size: 14px;
  line-height: 16.8px;
  margin: 20px auto 0;
  display: block;
  border: none;
  margin-bottom: 20px;
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
