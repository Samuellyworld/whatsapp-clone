import React,{useState} from 'react';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import Picker from 'emoji-picker-react';
import { IconButton } from '@material-ui/core';

import { ChatFooterDiv, ChatInputForm } from './Chat-Styles';

const ChatFooter = () => {
  const [text, setText] = useState("");
  const [pickerVisible, togglePicker] = useState(false);

  return ( <ChatFooterDiv>
          {pickerVisible && (
                <Picker
                  pickerStyle={{ position: "absolute", bottom: "114px" }}
                  onEmojiClick={(e, emoji) => {
                      setText(text + emoji.emoji)
                      togglePicker(false)
                  }}
                />
              )}
      <IconButton>        
       <InsertEmoticonIcon onClick={() => togglePicker((pickerVisible) => !pickerVisible)}/>
      </IconButton>
      <ChatInputForm>
        <input placeholder='Type a message' type='text'/>
        <button type='submit'>
            Send a message
        </button>
     </ChatInputForm>
      <MicIcon/>
  </ChatFooterDiv>

);
  }

export default ChatFooter;