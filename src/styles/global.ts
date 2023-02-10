//create a global style
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
   html {
    
    @media (max-width: 1080px) {
        font-size: 93.75%; //15px
    }
    @media (max-width: 720px) {
        font-size: 87.5%; //14px
    }
   }
    body {
        background: #00a884;
        color: white;
        -webkit-font-smoothing: antialiased;
        font-family: 'Roboto', sans-serif;
        
    }
    `;