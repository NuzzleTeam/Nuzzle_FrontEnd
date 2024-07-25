import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import UploadPhoto from "./pages/UploadPhoto/UploadPhoto";
import GlobalStyle from "./styles/GlobalStyle";
import PastQuestionPage from "./pages/Question/PastQuestionPage";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/past-question" element={<PastQuestionPage />} />
          <Route path="/upload-photo" element={<UploadPhoto />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
