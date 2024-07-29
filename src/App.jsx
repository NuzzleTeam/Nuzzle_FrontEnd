import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import GlobalStyle from "./styles/GlobalStyle";
import PastQuestionPage from "./pages/Question/PastQuestionPage";
import TodayQuestionPage from "./pages/Question/TodayQuestionPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import styled from "styled-components";
import PhotoCapturePage from "./pages/UploadPhoto/PhotoCapturePage";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  flex: 1;
  display: flex;
  justify-content: center; /* Center the content horizontally */
`;

const AppContent = () => {
  const location = useLocation();

  // 특정 경로에 따라 extraClass를 설정
  const headerExtraClass =
    location.pathname === "/today-question" ? "custom-header-bg" : "";

  return (
    <>
      <Header extraClass={headerExtraClass} />
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/past-question" element={<PastQuestionPage />} />
          <Route path="/today-question" element={<TodayQuestionPage />} />
          <Route path="/photo-capture" element={<PhotoCapturePage />} />
        </Routes>
      </Main>
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <AppContainer>
      <GlobalStyle />
      <Router>
        <AppContent />
      </Router>
    </AppContainer>
  );
};

export default App;
