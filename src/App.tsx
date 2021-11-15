import  * as React from 'react';
import {AppStyles, MainContent} from  './App-Styles';
import Chat from './components/Chat/Chat';
import Sidebar from './components/Sidebar/Sidebar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


const App = () =>  {


  return (
     <AppStyles>
      <MainContent>
       <Router>
        <Sidebar/>
         <Switch> 
             <Route exact path='/rooms/:roomId'>
              <Chat/>
             </Route>
             <Route exact path='/home/rooms'>
              <Chat/>
             </Route>
          </Switch>
       </Router>
      </MainContent>
    </AppStyles>
  
  );
}

export default App;
