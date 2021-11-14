import * as React from 'react';
import { ChatParagraph } from './Chat-Message-Styles';

const ChatMessage = ({...props}) => {
  
return (
 <ChatParagraph {...props}> 
      <span className='chat__name'>{props.message.name}</span>  
    {props.message.message}
       <span className='chat__timestamp'> 
       {
       new Date().toUTCString()
       } 
     </span>
 </ChatParagraph>

)
}

export default ChatMessage;