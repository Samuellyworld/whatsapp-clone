import * as React from 'react';
import { ChatDiv } from './Chat-Styles';

import ChatHeader from './Chat-Header/Chat-Header';
import ChatBody from './Chat-Body/Chat-Body';

const Chat = () => (
   <ChatDiv>
      <ChatHeader/>
      <ChatBody/>
   </ChatDiv>
   
)

export default Chat;