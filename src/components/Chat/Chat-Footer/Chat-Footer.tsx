import React,{useState} from 'react';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import Picker from 'emoji-picker-react';
import { IconButton } from '@material-ui/core';
import axios from '../../../axios/axios';
import SendIcon from '@material-ui/icons/Send';


import { ChatFooterDiv, ChatInputForm } from './Chat-Styles';

const ChatFooter = () => {
  const [text, setText] = useState("");
  const [pickerVisible, togglePicker] = useState(false);


  const sendMessage= async (e) => {
    e.preventDefault()
   await  axios.post('/messages/new', {
            message : text,
            name : "Dominic",
          timeStamp : "workin..hh",
          received : false
          })
    setText('')

  }

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
        <input value={text}
               onChange={e => setText(e.target.value)}
               placeholder='Type a message' 
               type='text'/>
        <button onClick={sendMessage} type='submit'>
            Send a message
        </button>
     </ChatInputForm>
     {
       text ?  <SendIcon onClick={sendMessage} /> :  <MicIcon/>
     }
     
  </ChatFooterDiv>

);
  }

export default ChatFooter;