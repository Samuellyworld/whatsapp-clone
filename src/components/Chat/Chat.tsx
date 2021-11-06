import * as React from 'react';
import { ChatDiv } from './Chat-Styles';

import ChatHeader from './Chat-Header/Chat-Header';
import ChatBody from './Chat-Body/Chat-Body';
import ChatFooter from './Chat-Footer/Chat-Footer';

const Chat = () => (
   <ChatDiv>
      <ChatHeader/>
      <ChatBody/>
      <ChatFooter/>
   </ChatDiv>
   
)

export default Chat;