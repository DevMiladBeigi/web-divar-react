import React from "react";
import {Search,ImageIcon,FormSearch,Button} from "./SearchBoxStyle";
import searchIcon from "../../../assets/images/searchIcon.svg";
import close from "../../../assets/images/close.svg";
const SearchBox = () => {
  return (
    <>
      <FormSearch>
      <Button><ImageIcon src={close}/></Button>
        <Search type="text" placeholder="جستجو در"></Search>
        <ImageIcon src={searchIcon}/>
      </FormSearch>
    </>
  );
};
export default SearchBox;
