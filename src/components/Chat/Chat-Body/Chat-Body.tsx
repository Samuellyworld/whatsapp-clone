import * as React from 'react';
import {ChatBodyDiv} from './Chat-Body-Styles';
import ChatMessage from '../Chat-Message/Chat-Message';



const ChatBody = () => (
   <ChatBodyDiv>
     <ChatMessage sender />
     <ChatMessage sender/>
     <ChatMessage receiver />
   </ChatBodyDiv>

)

export default ChatBody;