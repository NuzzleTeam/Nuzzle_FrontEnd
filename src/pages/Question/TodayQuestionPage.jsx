import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import todayCircleRabbitIcon from "../../assets/today_circle_rabbit.png";
import todayRabbitIcon from "../../assets/today_rabbit.png";
import writeIcon from "../../assets/write.png";
import uploadIcon from "../../assets/upload.png";
import questionBubbleImg from "../../assets/question_bubble.png";
import myModalImage from "../../assets/modal_image.png";
import modalAlert from "../../assets/modal_alert.png";
import axios from "axios";

const TodayQuestionPage = () => {
  const [isWriting, setIsWriting] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [answers, setAnswers] = useState([]);
  const [question, setQuestion] = useState("");
  const [userHasAnswered, setUserHasAnswered] = useState(false);
  const [familyHasAnswered, setFamilyHasAnswered] = useState(false);
  const [hasFetchedData, setHasFetchedData] = useState(false);
  const [questionId, setquestionId] = useState(null);
  const user = "나";
  const navigate = useNavigate();
  const familyId = "yourFamilyId";

  useEffect(() => {
    const fetchQuestionAndStatus = async () => {
      try {
        const questionResponse = await axios.get(
          `/api/questions/random-question`
        );
        setQuestion(questionResponse.data.questionContents);
        setquestionId(questionResponse.data.questionId);
        setAnswers([]);

        const answerStatusResponse = await axios.get(
          `/api/answer-status/${questionResponse.data.questionId}`
        );
        const userAnswered =
          answerStatusResponse.data.message === "Question has been answered.";
        setUserHasAnswered(userAnswered);

        setHasFetchedData(true);
      } catch (error) {
        console.error("Error fetching question and status", error);
        alert("문제를 불러오는데 실패했습니다. 나중에 다시 시도해 주세요.");
      }
    };

    fetchQuestionAndStatus();
  }, [familyId]);

  const handleWriteClick = (index) => {
    setIsWriting(index);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleUploadClick = async (index) => {
    if (inputValue.trim()) {
      try {
        await axios.post(`/api/questions/answer`, {
          questionId: questionId,
          answer: inputValue,
        });

        const newAnswers = [...answers];
        newAnswers[index] = inputValue;
        setAnswers(newAnswers);
        setIsWriting(null);
        setInputValue("");
        setUserHasAnswered(true);
      } catch (error) {
        console.error("Error submitting answer", error);
      }
    }
  };

  const handleCancelClick = () => {
    setIsWriting(null);
    setInputValue("");
  };

  const handleFamilyAnswer = () => {
    setFamilyHasAnswered(true);
    navigate("/wake-up-letter");
  };

  const handleNavigateToPastQuestions = () => {
    navigate("/past-question");
  };

  return (
    <div className="today-question-page">
      <style>
        {`
          .today-question-page {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            background-color: #f3f3f3;
            position: relative;
          }

          .question-card {
            position: relative;
            width: 100%;
            max-width: 400px;
            padding: 10px;
          }

          .question-section {
            position: relative;
            background-color: #f3f3f3;
          }

          .question-card-img {
            padding: 0 0.5rem;
          }

          .question-card-img img {
            width: 100%;
          }

          .question-header,
          .question-content,
          .main-avatar {
            position: absolute;
          }

          .question-header,
          .question-content {
            padding-left: 1rem;
            padding-top: 1.5rem;
          }

          .question-header {
            top: 10px;
            left: 20px;
            margin-bottom: 10px;
            font-size: 14px;
            margin: 0;
            font-family: "Pretendard";
          }

          .question-content {
            top: 40px;
            left: 20px;
            font-size: 20px;
            font-family: "Pretendard";
            font-weight: bold;
          }

          .main-avatar {
            bottom: 0px;
            left: 40px;
          }

          .main-avatar img {
            width: 143px;
            height: 117px;
          }

          hr {
            width: 320px;
            height: 4px;
            background-color: black;
            margin-bottom: 0;
          }

          .answer-section {
            display: flex;
            padding: 10px;
            flex-wrap: nowrap;
            align-content: center;
            margin-bottom: 10px;
            background-color: #fcfdf5;
            font-family: "Pretendard";
          }

          .sub-avatar img {
            width: 42px;
            height: 42px;
            padding: 10px;
          }

          .write-button img {
            width: 24px;
            height: 24px;
            padding: 10px;
            cursor: pointer;
          }

          .answer-info {
            padding: 10px;
          }

          .user-name {
            font-weight: bold;
            margin-bottom: 5px;
            font-family: "Pretendard";
            font-size: 16px;
          }

          .user-input {
            display: flex;
            align-items: center;
          }

          .user-input-field {
            border: 1px solid #ccc;
            border-radius: 10px;
            padding: 10px;
            font-size: 14px;
            width: 200px;
            margin-right: 10px;
            font-family: "Pretendard";
          }

          .input-upload-button {
            cursor: pointer;
          }

          .upload-icon {
            width: 24px;
            height: 24px;
            filter: grayscale(100%);
          }

          .upload-icon-active {
            color: #ff87b7;
          }

          .question-summary-button {
            position: absolute;
            top: 10px;
            right: 20px;
            background-color: #ffb1d0;
            border: none;
            border-radius: 20px;
            padding: 10px 20px;
            cursor: pointer;
            font-family: "Pretendard";
            font-size: 14px;
            font-weight: bold;
          }

          .question-summary-button:hover {
            background-color: #e0e0e0;
          }

          .modal-overlay-answer {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
          }

          .modal-answer {
            background-color: #ffe6ef;
            padding: 20px 85px;
            border-radius: 10px;
            text-align: center;
            font-family: "Pretendard";
            top: 180px;
            position: relative;
          }

          .modal-answer img {
            width: 150px;
          }

          .modal-answer p {
            margin: 15px;
            font-size: 16px;
          }

          .modal-answer button {
            background-color: white;
            border: none;
            border-radius: 20px;
            padding: 10px 20px;
            font-size: 14px;
            cursor: pointer;
            font-family: "Pretendard";
          }

          .alert-modal-icon {
            width: 20px !important;
          }

          .modal-overlay-wake {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
          }

          .modal-wake {
            background-color: #ffe6ef;
            padding: 20px 35px;
            border-radius: 10px;
            text-align: center;
            font-family: "Pretendard";
            border: 1px solid #FF87B7;
            top: 230px;
            position: relative;
          }

          .modal-wake img {
            width: 150px;
          }

          .modal-wake p {
            margin: 15px;
            font-size: 16px;
            font-weight: bold;
          }

          .modal-wake button {
            background-color: #FFB1D0;
            border: none;
            border-radius: 20px;
            padding: 10px 130px;
            font-size: 14px;
            cursor: pointer;
            font-family: "Pretendard";
            font-weight: bold;
          }
        `}
      </style>

      {/* Question Collection Button */}
      <button
        className="question-summary-button"
        onClick={handleNavigateToPastQuestions}
      >
        질문 모아보기
      </button>

      {/* MyAnswerModal */}
      {!userHasAnswered && hasFetchedData && (
        <div className="modal-overlay-answer">
          <div className="modal-answer">
            <img
              src={myModalImage}
              alt="my-modal-icon"
              className="my-modal-icon"
            />
            <p>
              내가 먼저 답변을 완료해야 <br />
              가족들의 답을 볼 수 있어요!
            </p>
            <button onClick={() => setUserHasAnswered(true)}>답하기</button>
          </div>
        </div>
      )}

      {/* FamilyAnswerModal */}
      {!familyHasAnswered && userHasAnswered && (
        <div
          className="modal-overlay-wake"
          onClick={() => setFamilyHasAnswered(true)}
        >
          <div className="modal-wake" onClick={(e) => e.stopPropagation()}>
            <img
              src={modalAlert}
              alt="alert-modal-icon"
              className="alert-modal-icon"
            />
            <p>
              어제의 질문에 <span style={{ color: "#FF87B7" }}>따미</span>님이
              답을 아직 안했어요!
            </p>
            <button onClick={handleFamilyAnswer}>깨우기</button>
          </div>
        </div>
      )}

      <div className="question-card">
        <div className="question-section">
          <div className="question-card-img">
            <img
              src={questionBubbleImg}
              alt="question-bubble"
              className="question-bubble-img"
            />
          </div>
          <div className="question-header">오늘의 질문 #1</div>
          <div className="question-content">{question}</div>
          <div className="main-avatar">
            <img
              src={todayRabbitIcon}
              alt="today-rabbit"
              className="today-rabbit-icon"
            />
          </div>
          <hr className="separator" />
        </div>

        {answers.map((answer, index) => (
          <div key={index} className="answer-section">
            <div className="sub-avatar">
              <img
                src={todayCircleRabbitIcon}
                alt="today-circle-rabbit"
                className="today-circle-rabbit-icon"
              />
            </div>
            <div className="answer-info">
              <div className="user-name">{user}</div>
              {isWriting === index ? (
                <div className="user-input">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="최대 30자 이내로 작성해주세요!"
                    maxLength="30"
                    className="user-input-field"
                  />
                  <div
                    className="input-upload-button"
                    onClick={() => handleUploadClick(index)}
                  >
                    <img
                      src={uploadIcon}
                      alt="upload"
                      className={`upload-icon ${
                        inputValue ? "upload-icon-active" : ""
                      }`}
                    />
                  </div>
                </div>
              ) : (
                <div className="user-answer">{answer}</div>
              )}
            </div>
            {isWriting !== index && (
              <div
                className="write-button"
                onClick={() => handleWriteClick(index)}
              >
                <img src={writeIcon} alt="write" className="write-icon" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodayQuestionPage;
