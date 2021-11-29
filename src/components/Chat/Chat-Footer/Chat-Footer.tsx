import React,{useState} from 'react';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import Picker from 'emoji-picker-react';
// import axios from '../../../axios/axios';
import SendIcon from '@material-ui/icons/Send';
import { useParams } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import {firestore} from '../../../firebase/firebase';
import {useStateValue} from '../../../providers/user/user-provider';


import { ChatFooterDiv, ChatInputForm } from './Chat-Footer-Styles';

const ChatFooter = () => {
   const {roomId} = useParams();
  const [text, setText] = useState<string>("");
  const [pickerVisible, togglePicker] = useState<boolean>(false);
  const [{user}] = useStateValue()

  const sendMessage= async (e) => {
    e.preventDefault()
  //  await  axios.post('/messages/new', {
  //          users : {
  //              message : text
  //          }
            
  //         })
   firestore.collection('rooms')
   .doc(roomId).collection('messages')
   .add({
       message : text,
       name : user.displayName,
       timeStamp : firebase.firestore.FieldValue.serverTimestamp()
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
       <InsertEmoticonIcon
        onClick={() => togglePicker((pickerVisible) => !pickerVisible)}
        />
      
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