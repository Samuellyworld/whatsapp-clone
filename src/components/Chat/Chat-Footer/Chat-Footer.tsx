import * as React from 'react';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import ChatInput from './Chat-Input/Chat-Input';
import MicIcon from '@material-ui/icons/Mic';

import { ChatFooterDiv } from './Chat-Styles';

const ChatFooter = () => (
  <ChatFooterDiv>
      <InsertEmoticonIcon/>
      <ChatInput/>
      <MicIcon/>
  </ChatFooterDiv>

);

export default ChatFooter;