import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

// import components/Footer
// import component/Header
// Added Header and Footer because they are used on more pages.
// Pages not using these components will be handled as exceptions.
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// import Home page that is Naming Character page
import Home from "./pages/Home";

// import Question and Photo pages
import PastQuestionPage from "./pages/Question/PastQuestionPage";
import TodayQuestionPage from "./pages/Question/TodayQuestionPage";
import PhotoCapturePage from "./pages/UploadPhoto/PhotoCapturePage";

// import Character pages
import Peek from "./pages/Peek";
import Piggybank from "./pages/Piggybank";
import Calendar from "./pages/Calendar";
import Setting from "./pages/Setting";
import ChaName from "./pages/MakingCharacter/ChaName";
import Keyword from "./pages/MakingCharacter/Keyword";
import ChaMake1 from "./pages/MakingCharacter/ChaMake1";
import styled from "styled-components";
import ChaColor from "./pages/MakingCharacter/ChaColor";
import ChaComplete from "./pages/MakingCharacter/ChaComplete";
import ChaNameComplete from "./pages/MakingCharacter/ChaNameComplete";

import FirstPage from "./pages/RegisterAndConnect/FirstPage"; // 여기부터 login
import Login from "./pages/RegisterAndConnect/Login";
import FindId from "./pages/RegisterAndConnect/FindId";
import FindAccount from "./pages/RegisterAndConnect/FindAccount";
import NoAccount from "./pages/RegisterAndConnect/NoAccount";

import SignUp from "./pages/RegisterAndConnect/SignUp";
import FindPw from "./pages/RegisterAndConnect/FindPw";
import ChangePw from "./pages/RegisterAndConnect/ChangePw";

import Policy from "./pages/RegisterAndConnect/Policy";
import KakaoLogin from "./pages/RegisterAndConnect/KakaoLogin";
import Connect from "./pages/RegisterAndConnect/Connect";
import EmailSignUp from "./pages/RegisterAndConnect/EmailSignUp";
import ConnectComplete from "./pages/RegisterAndConnect/ConnectComplete";
import SharedLink from "./pages/RegisterAndConnect/SharedLink";

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
          <Route path="/ChaName" element={<ChaName />} />
          <Route path="/ChaNameComplete" element={<ChaNameComplete />} />
          <Route path="/ChaColor" element={<ChaColor />} />
          <Route path="/ChaMake1" element={<ChaMake1 />} />
          <Route path="/ChaComplete" element={<ChaComplete />} />
          <Route path="/Keyword" element={<Keyword />} />
          <Route path="/past-question" element={<PastQuestionPage />} />
          <Route path="/today-question" element={<TodayQuestionPage />} />
          <Route path="/photo-capture" element={<PhotoCapturePage />} />
          <Route path="/peek" element={<Peek />} />
          <Route path="/piggybank" element={<Piggybank />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/setting" element={<Setting />} />

          <Route path="/firstpage" element={<FirstPage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/help/findid" element={<FindId />}></Route>
          <Route path="/help/findpw" element={<FindPw />}></Route>
          <Route path="/help/changepw" element={<ChangePw />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/signup/email" element={<EmailSignUp />}></Route>
          <Route path="/policy" element={<Policy />}></Route>
          <Route path="/sharedlink" element={<SharedLink />}></Route>
          <Route path="/connect" element={<Connect />}></Route>
          <Route path="/connect/complete" element={<ConnectComplete />}></Route>
          <Route path="/login/kakao" element={<KakaoLogin />}></Route>
          <Route path="/help/findaccount" element={<FindAccount />}></Route>
          <Route path="/help/noaccount" element={<NoAccount />}></Route>
        </Routes>
      </Main>
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <AppContainer>
      <Router>
        <AppContent />
      </Router>
    </AppContainer>
  );
};

export default App;
