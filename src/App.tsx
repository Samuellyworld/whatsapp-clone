import  React,{useEffect, useState} from 'react';
import {AppStyles, MainContent} from  './App-Styles';
import Chat from './components/Chat/Chat';
import Sidebar from './components/Sidebar/Sidebar';
import Pusher from 'pusher-js';
import axios from './axios/axios';

const App = () =>  {
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
      alert(JSON.stringify(newMessage));
      setMessages([...messages, newMessage])
    });

    return () => {
      channel.unbind_all()
      channel.unsubscribe()
    
    }
  },[messages])

   console.log(messages);

  return (
     <AppStyles>
      <MainContent>
       <Sidebar/>
       <Chat/>
      </MainContent>
    </AppStyles>
  
  );
}

export default App;
