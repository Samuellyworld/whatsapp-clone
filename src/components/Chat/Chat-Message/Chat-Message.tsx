import * as React from 'react';
import { ChatParagraph } from './Chat-Message-Styles';

const ChatMessage = ({...props}) => (
    <ChatParagraph {...props}> 
      <span className='chat__name'>Aspirin</span>  
    This is the message
       <span className='chat__timestamp'> 
       {
       new Date().toUTCString()
       } 
     </span>
 </ChatParagraph>

)

export default ChatMessage;