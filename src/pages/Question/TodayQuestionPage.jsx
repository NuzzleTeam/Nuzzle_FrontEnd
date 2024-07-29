import { useState } from "react";
import "./TodayQuestionPage.css";
import todayCircleRabbitIcon from "../../assets/today_circle_rabbit.png";
import todayRabbitIcon from "../../assets/today_rabbit.png";
import writeIcon from "../../assets/write.png";
import uploadIcon from "../../assets/upload.png"; // 업로드 아이콘 추가
import questionBubbleImg from "../../assets/question_bubble.png";

const TodayQuestionPage = () => {
  const [isWriting, setIsWriting] = useState(false);
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
      setIsWriting(false);
      setInputValue("");
    }
  };

  return (
    <div className="today-question-page">
      <div className="question-card">
        {/* question-section */}
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

        {/* answer-section mapping */}
        {answers.map((answer, index) => (
          <div key={index} className="answer-section">
            {/* sub-avatar */}
            <div className="sub-avatar">
              <img
                src={todayCircleRabbitIcon}
                alt="today-circle-rabbit"
                className="today-circle-rabbit-icon"
              />
            </div>
            {/* answer-info: user & answer */}
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
                    className="upload-button"
                    onClick={() => handleUploadClick(index)}
                  >
                    <img
                      src={uploadIcon}
                      alt="upload"
                      className="upload-icon"
                    />
                  </div>
                </div>
              ) : (
                <div className="user-answer">{answer}</div>
              )}
            </div>
            {/* write-button */}
            <div
              className="write-button"
              onClick={() => handleWriteClick(index)}
            >
              <img src={writeIcon} alt="write" className="write-icon" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodayQuestionPage;
