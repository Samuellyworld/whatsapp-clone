import * as React from 'react';
import { SidebarDiv, SidebarHeaderDiv, SidebarHeaderIcon} from './Sidebar-Styles';

import SearchChatInput from '../Search-Input/SearchChat-Input';
import RefreshIcon from '@material-ui/icons/DonutLarge';
import { Avatar, IconButton } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert'; 
import ChatIcon from '@material-ui/icons/Chat';

const Sidebar =() => ( 
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

    </SidebarDiv>
    
)

export default Sidebar;