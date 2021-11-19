import  * as React from 'react';
import {AppStyles, MainContent} from  './App-Styles';
import Chat from './components/Chat/Chat';
import Sidebar from './components/Sidebar/Sidebar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from './components/Login/Login';

import { auth, createUserProfileDocument } from './firebase/firebase';


const App = () =>  {
 const [user, setUser] = React.useState<Array<string>|null>(null);
  let  unsubscribeFromAuth:any = null;

  React.useEffect(() => {
   unsubscribeFromAuth= auth.onAuthStateChanged(async userAuth => {
     if(userAuth) {
       const userRef = createUserProfileDocument(userAuth);

       userRef.onSnapshot(snapShot => {
        setUser({
            id: snapShot.id,
            ...snapShot.data()
        });
      });
     }
   })
 })


  return (
     <AppStyles>
      <MainContent>
        {
          !user? (<Login/>) 
           :(
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

           )

        }
     
      </MainContent>
    </AppStyles>
  
  );
}

export default App;
