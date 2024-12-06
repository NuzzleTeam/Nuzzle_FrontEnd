import styled from "styled-components";
import CommonTitle from "./CommonTitle";
import { useNavigate } from "react-router-dom";
import getBackgroundImage from "../../utils/Insider/getBackgroundImage";

const Insider = () => {
  const navigate = useNavigate();

  const InsiderContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
    height: 100vh;
  `;

  const memos = [
    {
      message: "조심히 다녀오시게테스트0",
      from: "아빠0",
      top: 121,
      left: 20,
    },
    {
      message: "행복하소테스트1",
      from: "엄마1",
      top: 239,
      left: 167,
    },
    {
      message: "우하하하테스트2",
      from: "딸2",
      top: 397,
      left: 20,
    },
    {
      message: "기차는빨라테스트3",
      from: "아들3",
      top: 469,
      left: 180,
    },
  ];

  return (
    <InsiderContainer>
      <CommonTitle />
      <MemoContainer>
        {memos.map((memo, index) => (
          <Memo
            key={index}
            top={memo.top}
            left={memo.left}
            bgImage={getBackgroundImage(index)}
            onClick={() => {
              navigate("/singInsiderMemo", {
                state: {
                  memos: memos,
                  message: memo.message,
                  from: memo.from,
                  index: index,
                },
              });
            }}
          >
            <MemoInfo>{memo.message}</MemoInfo>
            <MemoFrom>{memo.from}</MemoFrom>
          </Memo>
        ))}
      </MemoContainer>
    </InsiderContainer>
  );
};

export default Insider;

const MemoContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
`;

const Memo = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "bgImage",
})`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  width: 191px;
  height: 226px;
  ${({ bgImage }) => `
background-image: url(${bgImage});
background-size:cover;
background-position: center`}
  font-weight: 400;
  font-size: 14px;
  padding: 30px 30px;
  box-sizing: border-box;

  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
`;

const MemoInfo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  font-size: 14px;
  font-weight: 400;
  line-height: 19.2px;
`;

const MemoFrom = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  font-size: 14px;
  font-weight: 400;
`;
