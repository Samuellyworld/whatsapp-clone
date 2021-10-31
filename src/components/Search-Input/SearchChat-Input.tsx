import * as React from 'react';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import { SearchDiv, SearchContainer, SearchInput } from './SearchChat-Input-Styles';

const SearchChatInput = () => (
    <SearchDiv>
      <SearchContainer>
        <SearchOutlined/>
        <SearchInput type='text' placeholder='search or start a new chat'>
        </SearchInput>
      </SearchContainer>
    </SearchDiv>

)

export default SearchChatInput