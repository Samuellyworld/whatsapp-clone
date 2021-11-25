import * as React from 'react';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import { SearchDiv, SearchContainer} from './SearchChat-Input-Styles';

const SearchChatInput = ({...props}) => (
    <SearchDiv>
      <SearchContainer>
        <SearchOutlined/>
        <input 
          type='text' 
          placeholder='search or start a new chat'
          onChange={props.searchChange} />
        
      </SearchContainer>
    </SearchDiv>

)

export default SearchChatInput;