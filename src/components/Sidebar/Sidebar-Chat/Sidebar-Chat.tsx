import * as React from 'react';

import { SidebarChatDiv, SidebarChatInfo } from './Sidebar-Chat-Styles';
import { Avatar } from '@material-ui/core';
import ArrowRightRounded from '@material-ui/icons/ArrowRightAltRounded';
import ArrowDropDown from '@material-ui/icons/ArrowDropDownSharp'

const SidebarChat = ({...props}) => {

    const [dropdown, setDropdown] = React.useState<boolean>(false);
    
 return  (
    
        <SidebarChatDiv>
        {
        props.addNewChat?
        (<SidebarChatInfo >
        <h3 onClick={() => setDropdown(!dropdown)}>Add New Chat </h3>
         {
            dropdown? (<ArrowDropDown onClick={() => setDropdown(!dropdown)} className='up'/>) 
            : (<ArrowRightRounded onClick={() => setDropdown(!dropdown)} className='down'/>)
          }
        {
            dropdown? 
               (<input type='text' placeholder='Add new chat' />) : null
        }
        </SidebarChatInfo>) :
        (
        <SidebarChatDiv>
            <Avatar/>
            <SidebarChatInfo>
            <h2>{props.name}</h2>
            <p> Message lol okay</p>
        </SidebarChatInfo>
        </SidebarChatDiv>
        )
        }
        </SidebarChatDiv> 
    
)

}

export default SidebarChat;