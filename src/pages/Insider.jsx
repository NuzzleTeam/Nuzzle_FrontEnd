import styled from "styled-components";
import pinkMemo from "../assets/pinkMemo.png";
import blueMemo from "../assets/blueMemo.png";
import yellowMemo from "../assets/yellowMemo.png";

const Insider = () => {
  const InsiderContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
    height: 100vh;
  `;

  const Title = styled.h1`
    position: absolute;
    left: 5%;
    top: 3%;
    line-height: 30px;
    font-family: "Pretendard";
    font-size: 20px;
    font-weight: bold;
    color: #000000;
    max-width: 90%;
    text-align: flex-start;
  `;

  const memos = [
    { message: "냉장고 메모1", top: 151, left: 26 },
    { message: "냉장고 메모2", top: 259, left: 167 },
    { message: "냉장고 메모3", top: 417, left: 26 },
    { message: "냉장고 메모4", top: 469, left: 170 },
  ];

  const getBackgroundImage = (index) => {
    const images = [pinkMemo, blueMemo, yellowMemo];
    return images[index % images.length];
  };

  const MemoContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
  `;

  const Memo = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 191px;
    height: 226px;
    background-image: ${({ bgImage }) => `url(${bgImage})`};
    background-size: cover;
    background-position: center;
    font-weight: bold;
    font-size: 14px;
    padding: 10px;
    text-align: center;
    box-sizing: border-box;

    top: ${({ top }) => top}px;
    left: ${({ left }) => left}px;
  `;

  return (
    <InsiderContainer>
      <Title>
        <span style={{ color: "#EE72A3" }}>냉장고 메모</span>
        는
        <br />
        우리 가족 누구나 볼 수 있답니다!
      </Title>
      <MemoContainer>
        {memos.map((memo, index) => (
          <Memo
            key={index}
            top={memo.top}
            left={memo.left}
            bgImage={getBackgroundImage(index)}
          >
            {memo.message}
          </Memo>
        ))}
      </MemoContainer>
    </InsiderContainer>
  );
};

export default Insider;
