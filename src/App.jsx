import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Page1 from './pages/Page1';
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
  const [selectedColor, setSelectedColor] = useState('');
  return (
    <Router>
      <Container>
        <Content>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ChaName" element={<ChaName />} />
            <Route path="/ChaNameComplete" element={<ChaNameComplete />} />
            <Route path="/ChaColor" element={<ChaColor setColor={setSelectedColor}/>} />
            <Route path="/ChaMake1" element={<ChaMake1 selectedColor={selectedColor}/>} />
            <Route path="/ChaComplete" element={<ChaComplete selectedColor={selectedColor}/>} />
            <Route path="/Keyword" element={<Keyword />} />
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
