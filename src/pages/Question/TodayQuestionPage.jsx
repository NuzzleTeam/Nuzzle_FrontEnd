import "./TodayQuestionPage.css";
import todayCircleRabbitIcon from "../../assets/today_circle_rabbit.png";
import todayRabbitIcon from "../../assets/today_rabbit.png";
import writeIcon from "../../assets/write.png";
import questionBubbleImg from "../../assets/question_bubble.png";

const TodayQuestionPage = () => {
  const question = "가족에게 받은 선물 중 기억에 남는 것은?";
  const answer =
    "아빠가 사준 첫 스마트폰 (갤럭시s2).아빠가 사준 첫 스마트폰 (갤럭시s2)";
  const user = "나";

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
        {[...Array(4)].map((_, index) => (
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
              <div className="user-answer">{answer}</div>
            </div>
            {/* write-button */}
            <div className="write-button">
              <img src={writeIcon} alt="write" className="write-icon" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodayQuestionPage;
