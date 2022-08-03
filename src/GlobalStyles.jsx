import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        font-size: 16px;
        background-color: #1c1c27;
        font-family: 'Inter', sans-serif;
    }
`;
