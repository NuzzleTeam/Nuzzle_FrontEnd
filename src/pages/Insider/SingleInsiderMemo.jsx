import styled from "styled-components";
import CommonTitle from "./CommonTitle";
import { useLocation } from "react-router-dom";
import getBackgroundImage from "../../utils/Insider/getBackgroundImage";
import { useState, useEffect, memo } from "react";
import rightarrow from "../../assets/rightarrow.png";
import leftarrow from "../../assets/leftarrow.png";
import meemoclose from "../../assets/memoclose.png";

const SingleInsiderMemo = () => {
  const location = useLocation();

  const memos = location.state.memos;
  const from = location.state.from;
  const [currentMessage, setCurrentMessage] = useState(location.state.message);
  const [currentIndex, setCurrentIndex] = useState(location.state.index);
  const [bgImage, setBgImage] = useState("");

  useEffect(() => {
    setBgImage(getBackgroundImage(currentIndex));
    setCurrentMessage(memos[currentIndex].message);
  }, [currentIndex]);

  const onLeftArrowClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const onRightArrowClick = () => {
    if (currentIndex < memos.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <SingleInsiderMemoContainer>
      <CommonTitle />
      <MemoContainer>
        <MemoImg src={leftarrow} onClick={onLeftArrowClick} />
        <Memo bgImage={bgImage}>
          <Memoclose src={meemoclose} />
          <MemoInfo>{currentMessage}</MemoInfo>
          <MemoFrom>{from}</MemoFrom>
        </Memo>
        <MemoImg src={rightarrow} onClick={onRightArrowClick} />
      </MemoContainer>
    </SingleInsiderMemoContainer>
  );
};

export default SingleInsiderMemo;

const SingleInsiderMemoContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const MemoContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding-top: 70px;
`;

const MemoImg = styled.img`
  display: flex;
  width: 24px;
  height: 24px;
`;

const Memo = styled.div`
  background-image: url(${(props) => props.bgImage});
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 287.68px;
  height: 332px;
  padding: 40px 25px;
  box-sizing: border-box;
`;

const Memoclose = styled.img`
  display: flex;
  position: absolute;
  top: 26%;
  left: 69%;
  width: 44px;
  height: 44px;
`;

const MemoInfo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  font-size: 16px;
  font-weight: 400;
  line-height: 19.2px;
`;

const MemoFrom = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  font-size: 16px;
  font-weight: 400;
`;
