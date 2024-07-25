import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import UploadPhoto from "./pages/UploadPhoto/UploadPhoto";
import GlobalStyle from "./styles/GlobalStyle";
import PastQuestionPage from "./pages/Question/PastQuestionPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import styled from "styled-components";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
`;

function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <Router>
        <Header />
        <Main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/past-question" element={<PastQuestionPage />} />
            <Route path="/upload-photo" element={<UploadPhoto />} />
          </Routes>
        </Main>
        <Footer />
      </Router>
    </AppContainer>
  );
}

export default App;
