import * as React from 'react';
import { SidebarDiv, SidebarHeaderDiv, SidebarHeaderIcon, SidebarChats} from './Sidebar-Styles';


import SearchChatInput from './Search-Input/SearchChat-Input';
import SidebarChat from './Sidebar-Chat/Sidebar-Chat';
import RefreshIcon from '@material-ui/icons/DonutLarge';
import { Avatar, IconButton } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert'; 
import ChatIcon from '@material-ui/icons/Chat';
import Options from '../Option-Dropdown/Options';
import Alert from './Alert-Notification/Alert';

import {firestore}  from '../../firebase/firebase';
import {useStateValue} from '../../providers/user/user-provider';

const Sidebar =() => {
const [rooms, setRooms] = React.useState<Array<any>>([])
const [searchfield, setSearchfield] = React.useState<string>('')
const [{user}] = useStateValue();
const [hidden, togglehidden] = React.useState<boolean>(false);

React.useEffect(() => {
 const unsubscribe = firestore.collection('rooms').onSnapshot(snapshot =>  {
   
   setRooms(snapshot.docs.map(doc => ({
     id : doc.id,
     data : doc.data()
   })
   )
   )}
  )
  return () => {
    unsubscribe()
  }
}, [])

const onSearchChatChange = e => {
  setSearchfield(e.target.value)
}

const filteredChatRoom = rooms.filter(room => {
  return room.data.name.toLowerCase().includes(searchfield.toLowerCase())
})

console.log(rooms, 'room');
console.log(user.photoURL, 'user photo');
return (
      <SidebarDiv>
        <SidebarHeaderDiv>
        <Avatar src={user.photoURL}/>
          <SidebarHeaderIcon>
              <IconButton>
              <RefreshIcon style={{ color: 'grey' }}/>
              </IconButton>
              <IconButton>
              <ChatIcon style={{ color: 'grey' }}/>
              </IconButton>  
              <IconButton onClick={() => togglehidden(!hidden)}>
              <MoreVertIcon style={{ color: 'grey' }}/>
              </IconButton>
             {hidden ? (<Options/>) : null  }
              
          </SidebarHeaderIcon>
         
        </SidebarHeaderDiv>
         <Alert/>
        <SearchChatInput searchChange={onSearchChatChange}/>
        <SidebarChats>
          <SidebarChat addNewChat/>
           {
            filteredChatRoom?.map(room => (
              <SidebarChat key={room.id}
               id={room.id}
               name={room.data.name}
               />
            ))
           } 
        </SidebarChats>
      </SidebarDiv>
    
)
}

export default Sidebar;

