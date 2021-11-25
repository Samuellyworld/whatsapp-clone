import * as React from 'react';
import { ChatParagraph } from './Chat-Message-Styles';
import {useStateValue} from '../../../providers/user/user-provider';

const ChatMessage = ({...props}) => {
  const [{user}] = useStateValue()
return (
 <ChatParagraph {...props} user={user}> 
      <span className='chat__name'>{props.message.name}</span>  
    {props.message.message}
       <span className='chat__timestamp'> 
       {
       new Date(props.message.timeStamp?.toDate()).toUTCString()
       } 
     </span>
 </ChatParagraph>

)
}

export default ChatMessage;