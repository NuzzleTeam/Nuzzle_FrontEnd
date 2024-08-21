import PropTypes from "prop-types";
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
      <style>
        {`
          .past-question-page {
            padding: 1rem;
            background-color: #fcfdf5;
          }
          
          h3 {
            font-size: 24px;
            text-align: start;
            margin: 0;
          }

          .past-questions-title {
            text-align: center;
            margin: 20px 0;
            font-size: 24px;
            font-family: "Pretendard";
            font-weight: bold;
          }

          .past-question-page {
            width: 90%;
          }

          .past-question-list {
            padding: 10px;
          }

          .past-question-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .past-question-subtitle {
            font-size: 14px;
            color: #ff87b7;
            margin: 0;
            font-family: "Pretendard";
            font-weight: bold;
          }

          .past-question-date,
          .number-of-comment {
            margin: 0;
            font-family: "Pretendard";
          }

          .past-question-date {
            padding-right: 125px;
            font-size: 12px;
          }

          .number-of-comment {
            display: flex;
            align-items: center;
            font-size: 14px;
          }

          .comment-icon {
            width: 20px;
            height: 20px;
            margin-right: 5px;
          }

          .past-question-detail {
            font-size: 16px;
            margin: 5px 0;
            background-color: #ffe6f0;
            border-radius: 8px;
            padding: 12px 20px 12px 20px;
            box-sizing: border-box;
            font-weight: 500;
            font-family: "Pretendard";
          }
        `}
      </style>
      <div className="past-questions-title">
        <h3>오늘의 질문들</h3>
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
