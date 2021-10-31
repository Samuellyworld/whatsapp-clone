import * as  React from 'react';
import {GlobalStyle, MainContent} from  './App-Style';
import Chat from './components/Chat/Chat';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <GlobalStyle>
      <MainContent>
       <Sidebar/>
       <Chat/>
      </MainContent>
    </GlobalStyle>
  );
}

export default App;
