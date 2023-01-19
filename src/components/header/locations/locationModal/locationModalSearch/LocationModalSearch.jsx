
import React from "react";
import {Search,ImageIcon,FormSearch,HorizontalLine} from "./LocationModalSearchStyle";
import searchIcon from '../../../../../assets/images/searchIcon.svg'
const LocationModalSearch = () => {
  return (
    <>
      <FormSearch>
        <Search type="text" placeholder="  جستجو در شهرها"></Search>
        <ImageIcon src={searchIcon}/>
      </FormSearch>
      <HorizontalLine></HorizontalLine>
    </>
  );
};
export default LocationModalSearch