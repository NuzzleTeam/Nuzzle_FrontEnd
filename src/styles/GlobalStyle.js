import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Pretendard', sans-serif;
    background-color: gray;
    overflow: hidden;
    height: 100vh;
  }
  
  #root {
    max-width: 400px;
    margin: 0 auto;
    background-color: white;
    height: 100vh;
    overflow: hidden; // 기존 index.css 속성 유지
  }
  
  main {
    height: 100%;
    // overflow: hidden; // 추가: 기존 main 스타일
  }
`;

export default GlobalStyle;
