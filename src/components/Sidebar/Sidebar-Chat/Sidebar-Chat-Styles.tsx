import styled from 'styled-components';

export const SidebarChatDiv = styled.div` 
  display : flex;
  padding : 10px;
  border-bottom : 1px solid #f6f6f6;

  &:hover {
      background-color: #ebebeb;
  }

` 

export const SidebarChatInfo = styled.div` 
   margin-left: 16px;
   margin-top : -13px;
   
 >  h2 {
     font-size : 16px;
     margin-bottom: 8px;
 }
 > h3 {
   cursor: pointer;

   .up, .down {
      margin-left : 50px;
      color : gray;
      margin-top: 5px;
   }

   &:hover {
     text-decoration: underline;
   }
  }
` 

