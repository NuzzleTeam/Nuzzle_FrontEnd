import "./TodayQuestionPage.css";
import todayCircleRabbitIcon from "../../assets/today_circle_rabbit.png";
import todayRabbitIcon from "../../assets/today_rabbit.png";

const TodayQuestionPage = () => {
  const question = "가족에게 받은 선물 중 기억에 남는 것은?";
  const answer =
    "아빠가 사준 첫 스마트폰 (갤럭시s2).아빠가 사준 첫 스마트폰 (갤럭시s2)";
  const user = "나";

  return (
    <div className="question-card">
      <div className="question-header">오늘의 질문 #1</div>
      <div className="question-content">{question}</div>
      <div className="answer-section">
        <div className="avatar">
          <img
            src={todayRabbitIcon}
            alt="today-rabbit"
            className="today-rabbit-icon"
          />
        </div>
        <div>
          <div className="user-name">{user}</div>
          <div className="user-answer">{answer}</div>
        </div>
      </div>
      <hr className="separator" />
      {[...Array(3)].map((_, index) => (
        <div key={index} className="answer-section">
          <div className="avatar">
            <img
              src={todayCircleRabbitIcon}
              alt="today-circle-rabbit"
              className="today-circle-rabbit-icon"
            />
          </div>
          <div>
            <div className="user-name">{user}</div>
            <div className="user-answer">{answer}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodayQuestionPage;
