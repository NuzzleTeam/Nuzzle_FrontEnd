import PropTypes from "prop-types";
import "./PastQuestionPage.css";
import commentIcon from "../../assets/comment.png";

const PastQuestionList = ({ questionNumber, date, detail, comments }) => (
  <div className="past-question-list">
    <div className="past-question-header">
      <p className="past-question-subtitle">오늘의 질문 #{questionNumber}</p>
      <p className="past-question-date">{date}</p>
      <div className="number-of-comment">
        <img src={commentIcon} alt="comment" className="comment-icon" />
        {comments}
      </div>
    </div>
    <p className="past-question-detail">{detail}</p>
  </div>
);

PastQuestionList.propTypes = {
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
      <div className="past-questions-title">
        <h3>지난 오늘의 질문들</h3>
      </div>
      {questions.map((question, index) => (
        <PastQuestionList
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
