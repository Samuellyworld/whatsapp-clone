import * as React from 'react';
import { SidebarDiv, SidebarHeaderDiv, SidebarHeaderIcon, SidebarChats} from './Sidebar-Styles';

import SearchChatInput from './Search-Input/SearchChat-Input';
import SidebarChat from './Sidebar-Chat/Sidebar-Chat';
import RefreshIcon from '@material-ui/icons/DonutLarge';
import { Avatar, IconButton } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert'; 
import ChatIcon from '@material-ui/icons/Chat';

import {firestore}  from '../../firebase/firebase';

const Sidebar =() => {
const [rooms, setRooms] = React.useState<Array<any>>([])


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

console.log(rooms, 'room');
return (
      <SidebarDiv>
        <SidebarHeaderDiv>
        <Avatar src=""/>
          <SidebarHeaderIcon>
              <IconButton>
              <RefreshIcon/>
              </IconButton>
              <IconButton>
              <ChatIcon/>
              </IconButton>  
              <IconButton>
              <MoreVertIcon/>
              </IconButton>
          </SidebarHeaderIcon>
        </SidebarHeaderDiv>
        <SearchChatInput/>
        <SidebarChats>
          <SidebarChat addNewChat/>
           {
            rooms?.map(room => (
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

