import styled from 'styled-components';

export const ChatFooterDiv = styled.div`
  display : flex;
  justify-content: space-between;
  align-items: center;
  height: 62px;
  border-top: 1px solid lightgray;

  >.MuiSvgIcon-root {
      padding: 10px;
      color: gray;
      cursor: pointer;
  }

`

export const ChatInputForm = styled.form`
  flex: 1;
  display: flex;

  > input {
      flex : 1;
      outline-width: 0;
      border-radius: 30px;
      padding: 10px;
      border: none;
  }

  > button {
      display : none;
  }
 

`