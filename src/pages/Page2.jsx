import Footer from '../components/Footer/Footer';
import styled from 'styled-components';


const Page2 = () => {
  return (
    <Container>
      <h2> 저금통 페이지 </h2>
      <p>저금통 페이지입니다!</p>
      <Footer></Footer>
    </Container>
  );
};

export default Page2;


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