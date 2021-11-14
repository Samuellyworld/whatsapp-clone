import * as React from 'react';

import { SidebarChatDiv, SidebarChatInfo } from './Sidebar-Chat-Styles';
import { Avatar } from '@material-ui/core';
import ArrowRightRounded from '@material-ui/icons/ArrowRightAltRounded';
import ArrowDropDown from '@material-ui/icons/ArrowDropDownSharp'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import SendIcon from '@material-ui/icons/Send';
import MicIcon from '@material-ui/icons/Mic';
import Picker from 'emoji-picker-react';
import {firestore} from '../../../firebase/firebase';

import {Link} from 'react-router-dom';


const SidebarChat = ({...props}) => {

    const [dropdown, setDropdown] = React.useState<boolean>(false);
    const [text, setText] = React.useState<string>("");
    const [pickerVisible, togglePicker] = React.useState<boolean>(false);
    
    const sendNewChat = () => {
       firestore.collection('rooms').add({
           name: text
       })
       setText('')
    }
    
 return  (
    
        <SidebarChatDiv>
         {pickerVisible && (
                <Picker
                  pickerStyle={{ position: "absolute", bottom: "209px", zIndex: "1" }}
                  onEmojiClick={(e, emoji) => {
                      setText(text + emoji.emoji)
                      togglePicker(false)
                  }}
                />
              )}            
        {
        props.addNewChat?
        (<SidebarChatInfo >
        <h3 onClick={() => setDropdown(!dropdown)}>Add New Chat </h3>
         {
            dropdown? (<ArrowDropDown onClick={() => setDropdown(!dropdown)} className='up'/>) 
            : (<ArrowRightRounded onClick={() => setDropdown(!dropdown)} className='down'/>)
          }
        {
            dropdown? 
               ( <form> 
                    <InsertEmoticonIcon
                      onClick={() => togglePicker((pickerVisible) => !pickerVisible)}
                    />
                   <input  value={text}
                    onChange={e => setText(e.target.value)}
                    type='text'
                     placeholder='Add new chat' /> 
                   <button onClick={sendNewChat}></button>
                   {
                    text ?  <SendIcon onClick={sendNewChat} /> :  null
                    }
                 </form>
                )
                : null
        }
        </SidebarChatInfo>) :
        (
        <Link to={`/home/rooms/${props.id}`}>
            <SidebarChatDiv>
                <Avatar/>
                <SidebarChatInfo>
                <h2>{props.name}</h2>
                <p> Message lol okay</p>
            </SidebarChatInfo>
            </SidebarChatDiv>
        </Link>
        )
        }
        </SidebarChatDiv> 
    
)

}

export default SidebarChat;