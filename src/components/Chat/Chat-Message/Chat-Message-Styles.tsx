import styled,{css} from 'styled-components';

const senderStyles = css`
  margin-left : auto;
  background-color: #dcf8c6;
`

const receiverStyles = css`
    margin-right : auto;
    background-color: #ffffff;
`

const getStyles = (props)=> {
  return props.receiver ? receiverStyles : senderStyles
}


export const ChatParagraph = styled.p`
   position : relative;
   font-size: 16px;
   padding: 10px;
   width: fit-content;
   border-radius : 10px;
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

    ${getStyles}


`