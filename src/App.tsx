import * as  React from 'react';
import {AppStyles, MainContent} from  './App-Style';
import Chat from './components/Chat/Chat';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
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
