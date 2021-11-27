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
              props.roomName === "faozan😉" ? 'online' : `Last seen ${
                  new Date(
                      props?.messages[props?.messages?.length -1]
                      ?.timeStamp?.toDate())?.toUTCString() 
                  
              }`

            } 
          </p>
      </ChatHeaderInfo>
      <ChatHeaderRight>
          <IconButton>
              <SearchOutlined style={{ color: 'grey' }}/>
          </IconButton>
          <IconButton>
              <AttachFile style={{ color: 'grey' }}/>
          </IconButton>
          <IconButton>
              <MoreVert style={{ color: 'grey' }}/>
          </IconButton>
      </ChatHeaderRight>
    </ChatHeaderDiv>

)

export default ChatHeader;