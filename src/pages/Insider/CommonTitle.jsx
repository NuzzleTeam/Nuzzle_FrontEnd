import styled from "styled-components";

const CommonTitle = () => {
  return (
    <Title>
      <span style={{ color: "#EE72A3" }}>냉장고 메모</span>
      는
      <br />
      우리 가족 누구나 볼 수 있답니다!
    </Title>
  );
};

export default CommonTitle;

const Title = styled.h1`
  position: relative;
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
