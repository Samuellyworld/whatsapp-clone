import styled from 'styled-components';

export const SidebarDiv = styled.div` 
 display : flex;
 flex-direction: column;
 flex: 0.35;

` 

export const SidebarHeaderDiv = styled.div` 
  display : flex;
  justify-content: space-between;
  padding : 20px;
  border-right: 1px solid var(--sidebar-header-border);
` 

export const SidebarHeaderIcon = styled.div` 
  display : flex;
  align-items: center;
  justify-content: space-between;
  min-width: 10vw;

  > MuiSvgIcon-root {
    color: grey !important;
    margin-right: 2vw;
    font-size: 24px !important;
  }
` 

export const SidebarChats = styled.div ` 
  flex: 1;
  background-color: white;
  overflow-y: auto;
` 
