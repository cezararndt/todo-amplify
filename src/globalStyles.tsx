import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background:rgba(241,241,241,1);
    user-select: none;
    cursor: default;
    cursor: url("./cursor.png") 13 13, auto;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
