import styled from 'styled-components';



export const SidebarChatDiv = styled.div` 
  display : flex;
  padding : 10px;
  border-bottom : 1px solid var(--sidebar-border-bottom);
  overflow : auto;

  &:hover {
      background-color: var(--sidebar-hover);
  }

  a {
    text-decoration : none !important;
    color: var(--sidebar-color);

  }

` 

export const SidebarChatInfo = styled.div` 
   margin-left: 68px;
   margin-top : -33px;
   
 > .header {
     font-size : 19px;
     margin-top: 0px;
     font-family: 'Roboto', sans-serif;
 }
 > h3 {
   cursor: pointer;
   overflow : hidden;
   padding : 10px;
   margin-left: -22px;
   margin-top: 29px;
    margin-bottom: 22px;
    color: var(--add-newChat-color);


   &:hover {
     text-decoration: underline;
   }
  }

   .up, .down {
     cursor: pointer;
     display : flex;
      margin-left : 121px;
      color : gray;
      margin-top: -54px;
   }

 >form {
  
  flex: 1;
  display: flex;

  >.MuiSvgIcon-root {
      padding: 7px;
      color: gray;
      cursor: pointer;
      margin-left : -50px;
  }

  > input {
      background-color: var(--sidebar-input);
      flex : 1;
      outline-width: 0;
      border-radius: 30px;
      padding: 10px;
      border: none;
      color : var(--chat-footer-inputColor);
  }

  > button {
      display : none;
  }
 
 }
  
` 

