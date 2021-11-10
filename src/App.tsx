import  * as React from 'react';
import {AppStyles, MainContent} from  './App-Styles';
import Chat from './components/Chat/Chat';
import Sidebar from './components/Sidebar/Sidebar';


const App = () =>  {


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
