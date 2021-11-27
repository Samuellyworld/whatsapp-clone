import  * as React from 'react';
import {AppStyles, MainContent} from  './App-Styles';
import Chat from './components/Chat/Chat';
import Sidebar from './components/Sidebar/Sidebar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from './components/Login/Login';
import Home from './components/Intro/Intro';
import { useStateValue } from './providers/user/user-provider';

// import { auth, createUserProfileDocument } from './firebase/firebase';


const App = () =>  {
  const [{user}] = useStateValue()

  const storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)")
               .matches ? "dark" : "light")

     React.useEffect(() => {
      if (storedTheme) {
        document.body.setAttribute('class', storedTheme)
    }
},[storedTheme])






  return (
     <AppStyles>
      <MainContent>
        {
          !user? (<Login/>) 
           :(
            <Router>
             <Sidebar/>
             <Switch> 
                 <Route exact path='/home/rooms/:roomId'>
                  <Chat/>
                 </Route>
                 <Route path='/'>
                  <Home/>
                 </Route>
              </Switch>
             </Router>

           )
}

        
     
      </MainContent>
    </AppStyles>
  
  );
}

export default App;
