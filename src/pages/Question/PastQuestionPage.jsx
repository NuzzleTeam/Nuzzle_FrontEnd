import PropTypes from "prop-types";
import "./PastQuestionPage.css";
import commentIcon from "../../assets/comment.png";

const TodayQuestionList = ({ questionNumber, date, detail, comments }) => (
  <div className="today-question-list">
    <div className="today-question-header">
      <p className="today-question-subtitle">오늘의 질문 #{questionNumber}</p>
      <p className="today-question-date">{date}</p>
      <div className="number-of-comment">
        <img src={commentIcon} alt="comment" className="comment-icon" />
        {comments}
      </div>
    </div>
    <p className="today-question-detail">{detail}</p>
  </div>
);

TodayQuestionList.propTypes = {
  questionNumber: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  detail: PropTypes.string.isRequired,
  comments: PropTypes.number.isRequired,
};

function PastQuestionPage() {
  const questions = [
    {
      date: "Jul 18 2024",
      detail: "가족에게 받은 선물 중 기억에 남는 것은?",
      comments: 0,
    },
    {
      date: "Jul 18 2024",
      detail: "가족에게 받은 선물 중 기억에 남는 것은?",
      comments: 1,
    },
    {
      date: "Jul 18 2024",
      detail: "가족에게 받은 선물 중 기억에 남는 것은?",
      comments: 2,
    },
    {
      date: "Jul 18 2024",
      detail: "가족에게 받은 선물 중 기억에 남는 것은?",
      comments: 3,
    },
    {
      date: "Jul 18 2024",
      detail: "가족에게 받은 선물 중 기억에 남는 것은?",
      comments: 3,
    },
    {
      date: "Jul 18 2024",
      detail: "가족에게 받은 선물 중 기억에 남는 것은?",
      comments: 3,
    },
  ];

  return (
    <div className="past-question-page">
      <div className="today-questions-title">
        <h3>오늘의 질문들</h3>
      </div>
      {questions.map((question, index) => (
        <TodayQuestionList
          key={index}
          questionNumber={index + 1}
          date={question.date}
          detail={question.detail}
          comments={question.comments}
        />
      ))}
    </div>
  );
}

export default PastQuestionPage;
