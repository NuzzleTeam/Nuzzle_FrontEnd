import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const INITIAL_TIMER_SECONDS = 180;
const PHONE_NUMBER_LENGTH = 11;
const VERIFICATION_CODE_LENGTH = 4;

function confirmTimer() {
  const navigate = useNavigate();
  const [btnColor, setBtnColor] = useState("#DFDFDF");
  const [phoneNumberDisabled, setPhoneNumberDisabled] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [verificationStatus, setVerificationStatus] = useState({
    sent: false,
    verified: false,
    message: "",
  });
  const [timer, setTimer] = useState(INITIAL_TIMER_SECONDS);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;
    if (isActive) {
      interval = setInterval(() => {
        setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isActive]);

  const resetTimer = () => {
    setTimer(INITIAL_TIMER_SECONDS);
    setIsActive(true);
  };

  const stopTimer = () => {
    setIsActive(false);
  };

  const handleChange = (e) => {
    const numbersOnly = e.target.value.replace(/\D/g, "");
    if (numbersOnly.length <= PHONE_NUMBER_LENGTH) {
      setPhoneNumber(numbersOnly);
    }
  };

  const sendVerification = () => {
    if (phoneNumber.length !== PHONE_NUMBER_LENGTH) return;
    setVerificationStatus((prevStatus) => ({ ...prevStatus, sent: true }));
  };

  const resendVerification = () => {
    setVerificationStatus((prevStatus) => ({
      ...prevStatus,
      verified: false,
      message: "",
    }));
    setVerificationCode("");
    resetTimer();
  };

  const verifyCode = () => {
    if (verificationCode === "1111") {
      setVerificationStatus({
        sent: true,
        verified: true,
        message: "인증 성공",
      });
      navigate("/");
    } else {
      setVerificationStatus({
        sent: true,
        verified: false,
        message: "인증번호가 잘못되었습니다.",
      });
    }
  };

  const formatTime = () => {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  const handleVerificationCodeChange = (e) => {
    const numbersOnly = e.target.value.replace(/\D/g, "");
    if (numbersOnly.length <= VERIFICATION_CODE_LENGTH) {
      setVerificationCode(numbersOnly);
    }
  };

  useEffect(() => {
    setPhoneNumberDisabled(phoneNumber.length !== PHONE_NUMBER_LENGTH);
  }, [phoneNumber]);

  useEffect(() => {
    if (verificationStatus.sent) {
      resetTimer();
    }
  }, [verificationStatus.sent]);

  useEffect(() => {
    if (verificationStatus.verified) {
      stopTimer();
    }
  }, [verificationStatus.verified]);

  useEffect(() => {
    if (verificationCode.length === VERIFICATION_CODE_LENGTH) {
      setBtnColor("#FFB1D0");
    } else {
      setBtnColor("#DFDFDF");
    }
  }, [verificationCode]);

  return {
    phoneNumber,
    verificationCode,
    verificationStatus,
    timer,
    btnColor,
    phoneNumberDisabled,
    handleChange,
    sendVerification,
    resendVerification,
    verifyCode,
    formatTime,
    handleVerificationCodeChange,
  };
}

export default confirmTimer;
