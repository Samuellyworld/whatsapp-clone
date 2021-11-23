import * as React from 'react'

import SearchOutlined from '@material-ui/icons/SearchOutlined';
import { Avatar, IconButton } from '@material-ui/core/';
import AttachFile from '@material-ui/icons/AttachFile';
import MoreVert from '@material-ui/icons/MoreVert';


import { ChatHeaderDiv, ChatHeaderInfo, ChatHeaderRight } from './Chat-Header-Styles';

const ChatHeader = ({...props}) => (
    <ChatHeaderDiv>
        <Avatar/>
      <ChatHeaderInfo>
          <h3>{props.roomName}</h3>
          <p> 
            {
              props.roomName === "faozan😉" ? 'online' : "Last seen at"
            } 
          </p>
      </ChatHeaderInfo>
      <ChatHeaderRight>
          <IconButton>
              <SearchOutlined/>
          </IconButton>
          <IconButton>
              <AttachFile/>
          </IconButton>
          <IconButton>
              <MoreVert/>
          </IconButton>
      </ChatHeaderRight>
    </ChatHeaderDiv>

)

export default ChatHeader;