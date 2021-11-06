import * as React from 'react';
import { ChatInputForm } from './Chat-Input-Styes';
const ChatInput = () => (
 <ChatInputForm>
     <input placeholder='Type a message' type='text'/>
     <button type='submit'>
         Send a message
     </button>
 </ChatInputForm>

);

export default ChatInput;