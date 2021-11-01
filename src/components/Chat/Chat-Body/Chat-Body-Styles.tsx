import styled from 'styled-components';
import img from '../../../assets/bg-chat-light.png';

export const ChatBodyDiv = styled.div`
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    opacity: 0.05;
    z-index: 1;
  flex : 1;
  background: url(${img})  #E4DCD4;
  background-repeat : repeat;
  background-position : center;
  padding : 38px;
  overflow-y : auto;
`