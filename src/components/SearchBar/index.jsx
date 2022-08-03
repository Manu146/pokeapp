import { useState } from "react";
import { Wrapper, SearchInput, SearchButton } from "./style";
import { ReactComponent as SearchIcon } from "../../icons/search.svg";

//TODO refactor this component to use internal state and run external callback on search trigger

export default function SearchBar({ handleSearch }) {
  const [text, setText] = useState("");
  let isDisabled = !text || text.trim() === "";
  return (
    <Wrapper
      onSubmit={(e) => {
        e.preventDefault();
        handleSearch(text);
      }}
    >
      <SearchInput
        type="search"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type a number to get a Pokemon!"
      />
      <SearchButton onClick={() => handleSearch(text)} disabled={isDisabled}>
        <SearchIcon />
      </SearchButton>
    </Wrapper>
  );
}
