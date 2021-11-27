import styled from 'styled-components';
import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`

.dark {
    --bg-body :  rgb(38, 45, 49);
}
.light {
    --bg-body:  #f8f9fa;
}

 body {
    margin: 0;
   padding: 0;
   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 }

`



export const AppStyles = styled.div`
 display : grid;
 place-items: center;
 height: 100vh;
 background-color: #dadbd3;
`

export const MainContent  = styled.div`
 display : flex;
 background-color: #ededed;
 margin-top: -50px;
 height : 90vh;
 width: 90vw;
 box-shadow : -1px 4px 20px -6px rgba(0,0,0,0.75);
`