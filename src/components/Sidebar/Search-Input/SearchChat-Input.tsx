import * as React from 'react';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import { SearchDiv, SearchContainer} from './SearchChat-Input-Styles';

const SearchChatInput = () => (
    <SearchDiv>
      <SearchContainer>
        <SearchOutlined/>
        <input type='text' placeholder='search or start a new chat' />
        
      </SearchContainer>
    </SearchDiv>

)

export default SearchChatInput;