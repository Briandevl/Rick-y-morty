import {
   SearchContainer,
   SearchInput,
   SearchIcon,
   SearchIconContainer,
} from "./SearchBar.styles";
import lupa from ".././assets/lupa.png"
import { useState } from "react";

function SearchBar(props) {

   const { onSearch } = props;
   const [id, setId] = useState("")

   function changeHandler(e) {
      e.preventDefault();
      let input = e.target.value

      setId(input)
   }

   return (
      <SearchContainer>
          <SearchInput type="search" value={id} onChange={changeHandler} />
         <SearchIconContainer>
            <SearchIcon src={lupa} onClick={() => onSearch(id)} />
         </SearchIconContainer> 
      </SearchContainer>
   );
}

export default SearchBar;