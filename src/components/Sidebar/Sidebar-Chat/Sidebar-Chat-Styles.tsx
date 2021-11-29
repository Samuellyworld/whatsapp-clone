import styled from 'styled-components';

export const SidebarChatDiv = styled.div` 
  display : flex;
  padding : 10px;
  border-bottom : 1px solid var(--sidebar-border-bottom);
  overflow : auto;

  &:hover {
      background-color: #ebebeb;
  }

  a {
    text-decoration : none !important;
    color: black;
  }

` 

export const SidebarChatInfo = styled.div` 
   margin-left: 68px;
   margin-top : -33px;
   
 >  h2 {
     font-size : 16px;
     margin-top: 2px;
 }
 > h3 {
   cursor: pointer;
   overflow : hidden;


   &:hover {
     text-decoration: underline;
   }
  }

   .up, .down {
     cursor: pointer;
     display : flex;
      margin-left : 155px;
      color : gray;
      margin-top: -40px;
   }

 >form {
  
  flex: 1;
  display: flex;

  >.MuiSvgIcon-root {
      padding: 7px;
      color: gray;
      cursor: pointer;
  }

  > input {
      background-color: whitesmoke;
      flex : 1;
      outline-width: 0;
      border-radius: 30px;
      padding: 10px;
      border: none;
  }

  > button {
      display : none;
  }
 
 }
  
` 

