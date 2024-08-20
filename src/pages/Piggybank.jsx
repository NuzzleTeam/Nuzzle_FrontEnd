import styled from "styled-components";

const Piggybank = () => {
  return (
    <Container>
      <h2> 저금통 페이지 </h2>
      <p>저금통 페이지입니다!</p>
    </Container>
    
  );
};


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #FCFDF5;
  padding: 20px;
  position: relative;
`;

export default Piggybank;

