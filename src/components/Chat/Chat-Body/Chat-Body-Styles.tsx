import styled from 'styled-components';
import img from '../../../assets/white.png';

export const ChatBodyDiv = styled.div`
   padding : 38px;
   overflow-y : auto;
    flex : 1;
    background: url(${img}) ;
    background-repeat : repeat;
     background-position : center;
  
.chat__message{
   position : relative;
   font-size: 16px;
   padding: 10px;
   width: fit-content;
   border-radius : 10px;
   background-color: #ffffff;
   margin-bottom: 30px;

.chat__timestamp{
  margin-left: 10px;
  font-size : xx-small;
}
  .chat__name {
     position: absolute;
     top: -15px;
     font-weight: 800;
     font-size: xx-small;
  }

}
`
