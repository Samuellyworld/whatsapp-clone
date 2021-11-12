import * as React from 'react';

import { SidebarChatDiv, SidebarChatInfo } from './Sidebar-Chat-Styles';
import { Avatar } from '@material-ui/core';

const SidebarChat = ({...props}) => (
   <SidebarChatDiv>
    <Avatar/>
    <SidebarChatInfo>
        <h2>{props.name}</h2>
        <p> Message lol okay</p>
    </SidebarChatInfo>
   </SidebarChatDiv>
)

export default SidebarChat;