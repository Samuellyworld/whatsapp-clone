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
         <Switch>
           <Route path='/home'>
             <Sidebar/>
             <Route exact path='/home/rooms/:roomId'>
              <Chat/>
             </Route>
             <Route exact path='/home/rooms'>
              <Chat/>
             </Route>
            </Route>
            <Route path='/'>
              <h1> Homescreen </h1>
            </Route>
          </Switch>
       </Router>
      </MainContent>
    </AppStyles>
  
  );
}

export default App;
