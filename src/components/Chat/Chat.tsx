import  React,{useState, useEffect} from 'react';
import { ChatDiv } from './Chat-Styles';
import ChatHeader from './Chat-Header/Chat-Header';
import ChatBody from './Chat-Body/Chat-Body';
import ChatFooter from './Chat-Footer/Chat-Footer';
import MessageContext from '../../contexts/messages-context';
import { useParams } from 'react-router-dom';
import {firestore} from '../../firebase/firebase';


import axios from '../../axios/axios';
import Pusher from 'pusher-js';

const Chat = () => {
    const {roomId} = useParams();

   const [roomName, setRoomName] = useState('')
   const [messages, setMessages] = useState<Array<string>>([])
   console.log(roomId)

   useEffect(() => {
   
      if (roomId) {
         firestore.collection("rooms").doc(roomId).onSnapshot((snapshot) => 
              setRoomName(snapshot?.data()?.name)    
           )

      }
   }, [roomId])

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
    <ChatHeader roomName={roomName}/>
    <MessageContext.Provider value={messages}>
      <ChatBody/>
    </MessageContext.Provider>
    <ChatFooter/>
  </ChatDiv>
  ) 
   
}

export default Chat;