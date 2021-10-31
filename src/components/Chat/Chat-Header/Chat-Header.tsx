import * as React from 'react'
import {Avatar} from '@material-ui/core/Avatar';
import {SearchOutlined} from '@material-ui/icons/SearchOutlined';
import { IconButton } from '@material-ui/core/IconButton';
import {AttachFile} from '@material-ui/icons/AttachFile';
import {MoreVert} from '@material-ui/icons/MoreVert';

import { ChatHeaderDiv, ChatHeaderInfo, ChatHeaderRight } from './Chat-Header-Styles';

const ChatHeader = () => (
    <ChatHeaderDiv>
        <Avatar/>
      <ChatHeaderInfo>
          <h3> Room Name</h3>
          <p> Last seen at ...</p>
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