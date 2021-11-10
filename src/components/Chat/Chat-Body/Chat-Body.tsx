import * as React from 'react';
import {ChatBodyDiv} from './Chat-Body-Styles';
import ChatMessage from '../Chat-Message/Chat-Message';
import MessageContext from '../../../contexts/messages-context';



const ChatBody = () => {
    const messages = React.useContext(MessageContext);

  return (
    <ChatBodyDiv>
      {
        messages?.map((message,i) => (
          (<ChatMessage key={i} message={message} />)
        ))
      }
     
  </ChatBodyDiv>
  )
   

}

export default ChatBody;