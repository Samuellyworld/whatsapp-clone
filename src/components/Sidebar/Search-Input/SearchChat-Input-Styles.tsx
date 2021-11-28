import styled from 'styled-components';

export const SearchDiv = styled.div` 
 display:flex;
 align-items: center;
 background-color: #f6f6f6;
 height: 39px;
 padding : 10px;
`
export const SearchContainer = styled.div ` 
  display : flex;
  align-items: center;
  background-color: var(--sidebar-input);
  width: 100%;
  height: 35px;
  border-radius: 20px;

> .MuiSvgIcon-root {
    color: gray;
    padding : 10px;
}
> input {
    background-color: var(--sidebar-input);
    border:  none;
    margin-left: 10px;
    outline-width: 0;

}

`
