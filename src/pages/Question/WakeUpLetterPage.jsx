import { useState } from "react";
import { useNavigate } from "react-router-dom";
import letterRabbitIcon from "../../assets/letter_rabbit.png";

const WakeUpLetterPage = () => {
  const [recipient, setRecipient] = useState("아빠");
  const [message, setMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleRecipientChange = (e) => setRecipient(e.target.value);
  const handleMessageChange = (e) => setMessage(e.target.value);

  const handleSubmit = () => {
    setShowPopup(true);
    localStorage.setItem("answered", "true");
    setTimeout(() => {
      navigate("/today-question", {
        state: { showPopup: false, setIsWriting: 0 },
      });
    }, 500); // Adjust the delay as needed
  };

  const styles = {
    page: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    },
    card: {
      padding: "20px",
      borderRadius: "30px",
      width: "300px",
      textAlign: "center",
      backgroundColor: "#ffe6ef",
      marginBottom: "20px",
    },
    header: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    icon: {
      width: "70%",
      height: "70%",
      marginBottom: "10px",
    },
    select: {
      border: "none",
      fontWeight: "bold",
      background: "transparent",
    },
    textarea: {
      width: "100%",
      height: "100px",
      border: "none",
      padding: "10px",
      margin: "10px 0",
      resize: "none",
      background:
        "repeating-linear-gradient(to bottom, transparent, transparent 19px, #ccc 20px)",
      lineHeight: "20px",
      textAlign: "left",
      fontFamily: "inherit",
    },
    placeholder: {
      color: "#888",
    },
    button: {
      backgroundColor: "pink",
      border: "none",
      padding: "10px 20px",
      borderRadius: "20px",
      cursor: "pointer",
      marginTop: "10px",
    },
    popup: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    popupContent: {
      backgroundColor: "white",
      padding: "20px",
      borderRadius: "10px",
      textAlign: "center",
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <div style={styles.header}>
          <img src={letterRabbitIcon} alt="rabbit icon" style={styles.icon} />
          <p>
            <strong>
              To:{" "}
              <select
                value={recipient}
                onChange={handleRecipientChange}
                style={styles.select}
              >
                <option value="아빠">아빠</option>
                <option value="엄마">엄마</option>
                <option value="동생">동생</option>
              </select>
              님께 보냅니다.
            </strong>
          </p>
        </div>
        <textarea
          value={message}
          onChange={handleMessageChange}
          placeholder="해당 부분을 클릭하여 적고 싶은 내용을 입력해주세요. 수신자는 발신자를 알 수 없습니다."
          style={styles.textarea}
        />
      </div>
      <button style={styles.button} onClick={handleSubmit}>
        비밀 편지 전송하기
      </button>
      {showPopup && (
        <div style={styles.popup}>
          <div style={styles.popupContent}>
            <p>성공적으로 비밀 편지를 보냈어요!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default WakeUpLetterPage;
