import { useState } from "react";
import todayCircleRabbitIcon from "../../assets/today_circle_rabbit.png";
import todayRabbitIcon from "../../assets/today_rabbit.png";
import writeIcon from "../../assets/write.png";
import uploadIcon from "../../assets/upload.png";
import questionBubbleImg from "../../assets/question_bubble.png";

const TodayQuestionPage = () => {
  const [isWriting, setIsWriting] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [answers, setAnswers] = useState([
    "아빠가 사준 첫 스마트폰 (갤럭시s2).아빠가 사준 첫 스마트폰 (갤럭시s2)",
    "아빠가 사준 첫 스마트폰 (갤럭시s2).아빠가 사준 첫 스마트폰 (갤럭시s2)",
    "아빠가 사준 첫 스마트폰 (갤럭시s2).아빠가 사준 첫 스마트폰 (갤럭시s2)",
    "아빠가 사준 첫 스마트폰 (갤럭시s2).아빠가 사준 첫 스마트폰 (갤럭시s2)",
  ]);
  const question = "가족에게 받은 선물 중 기억에 남는 것은?";
  const user = "나";

  const handleWriteClick = (index) => {
    setIsWriting(index);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleUploadClick = (index) => {
    if (inputValue.trim()) {
      const newAnswers = [...answers];
      newAnswers[index] = inputValue;
      setAnswers(newAnswers);
      setIsWriting(null);
      setInputValue("");
    }
  };

  const handleCancelClick = () => {
    setIsWriting(null);
    setInputValue("");
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
            color: #FF87B7;
          }

          .question-summary-button {
            position: absolute;
            top: 10px;
            right: 20px;
            background-color: #efefef;
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
        `}
      </style>

      {/* Question Collection Button */}
      <button className="question-summary-button">질문 모아보기</button>

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
