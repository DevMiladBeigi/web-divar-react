import React from "react";
import Box from "./HeaderStyle";
import Logo from "./logo/Logo";
import Locations from "./locations/Locations";
import Categories from "./categories/Categories";
import SearchBox from "./searchBox/SearchBox";

const Header = () => {
  return (
    <Box>
      <SearchBox/>
      <Categories/>
      <Locations/>
      <Logo />
    </Box>
  );
};
export default Header;
