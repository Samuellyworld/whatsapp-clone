import  React,{useState, useEffect} from 'react';
import { ChatDiv } from './Chat-Styles';
import ChatHeader from './Chat-Header/Chat-Header';
import ChatBody from './Chat-Body/Chat-Body';
import ChatFooter from './Chat-Footer/Chat-Footer';
import MessageContext from '../../contexts/messages-context';

import axios from '../../axios/axios';
import Pusher from 'pusher-js';

const Chat = () => {

   const [messages, setMessages] = useState<Array<string>>([])

   useEffect(() => {
    axios.get('/messages/sync')
     .then(response => {setMessages(response.data)}  )
   }, [])
 
   useEffect(() => {
     const pusher = new Pusher('a01164abd7f41e43817a', {
       cluster: 'us3'
     });
 
     const channel = pusher.subscribe('messages');
     channel.bind('inserted', (newMessage) => {
       setMessages([...messages, newMessage])
     });
 
     return () => {
       channel.unbind_all()
       channel.unsubscribe()
     
     }
   },[messages])
 
    console.log(messages);

  return (
   <ChatDiv>
    <ChatHeader/>
    <MessageContext.Provider value={messages}>
      <ChatBody/>
    </MessageContext.Provider>
    <ChatFooter/>
  </ChatDiv>
  ) 
   
}

export default Chat;