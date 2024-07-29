import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PastQuestionPage from "./pages/Question/PastQuestionPage";
import TodayQuestionPage from "./pages/Question/TodayQuestionPage";
import PhotoCapturePage from "./pages/UploadPhoto/PhotoCapturePage";
import Page1 from './pages/Page1'; // merge 하는 과정에서 Header, Footer추가안함 필요없는 페이지도 있어서
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import ChaName from './pages/MakingCharacter/ChaName';
import Keyword from './pages/MakingCharacter/Keyword';
import ChaMake1 from './pages/MakingCharacter/ChaMake1';
import styled from 'styled-components';
import ChaColor from './pages/MakingCharacter/ChaColor';
import ChaComplete from './pages/MakingCharacter/ChaComplete';
import ChaNameComplete from './pages/MakingCharacter/ChaNameComplete';


function App() {
  return (
    <Router>
      <Container>
        <Content>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ChaName" element={<ChaName />} />
            <Route path="/ChaNameComplete" element={<ChaNameComplete />} />
            <Route path="/ChaColor" element={<ChaColor />} />
            <Route path="/ChaMake1" element={<ChaMake1 />} />
            <Route path="/ChaComplete" element={<ChaComplete/>} />
            <Route path="/Keyword" element={<Keyword />} />
            <Route path="/past-question" element={<PastQuestionPage />} /> 
            <Route path="/today-question" element={<TodayQuestionPage />} />
            <Route path="/photo-capture" element={<PhotoCapturePage />} />
            <Route path="/peek" element={<Page1 />} />
            <Route path="/piggybank" element={<Page2 />} />
            <Route path="/calendar" element={<Page3 />} />
            <Route path="/setting" element={<Page4 />} />
          </Routes>
        </Content>
        
      </Container>
    </Router>
  )
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.div`
  flex: 1;
`;
