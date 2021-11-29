import styled from 'styled-components';
import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`

.dark {
    --home-bg-body :  rgb(38, 45, 49);
    --home-text : rgb(166, 168, 170);
    --home-title :  rgba(241, 241, 242, 0.88);
    --home-text-border : rgba(241, 241, 242, 0.11);
    --sidebar-input : #323739;
    --sidebar-input-bg : #131c21;
    --sidebar-header-border : gray;
 
}
.light {
    --home-bg-body:  #f8f9fa;
    --home-text : rgba(0, 0, 0, 0.45);
    --home-title: #525252;
    --home-text-border: rgba(74, 74, 74, 0.08);
    --sidebar-input: white;
    --sidebar-input-bg : #f6f6f6;
    --sidebar-header-border : lightgray;
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
 background-color: var(--home-bg-body);
 margin-top: -50px;
 height : 90vh;
 width: 90vw;
 box-shadow : -1px 4px 20px -6px rgba(0,0,0,0.75);
`