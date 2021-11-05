import * as React from 'react';
import {ChatBodyDiv} from './Chat-Body-Styles';

const ChatBody = () => (
   <ChatBodyDiv>
       <p className="chat__message"> 
          <span className='chat__name'>Aspirin</span>  
           This is the message
           <span className='chat__timestamp'> 
            {
             new Date().toUTCString()
            } 
           </span>
       </p>
   </ChatBodyDiv>

)

export default ChatBody;