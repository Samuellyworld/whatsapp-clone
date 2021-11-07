import  React,{useEffect} from 'react';
import {AppStyles, MainContent} from  './App-Styles';
import Chat from './components/Chat/Chat';
import Sidebar from './components/Sidebar/Sidebar';
import Pusher from 'pusher-js';

function App() {

  useEffect(() => {
    const pusher = new Pusher('a01164abd7f41e43817a', {
      cluster: 'us3'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (data) => {
      alert(JSON.stringify(data));
    });
  })
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
