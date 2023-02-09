import React from "react";
import Box from "./HeaderStyle";
import Logo from "./logo/Logo";
import Locations from "./locations/Locations";
import Categories from "./categories/Categories";
import SearchBox from "./searchBox/SearchBox";
import MyDivar from "./myDivar/MyDivar";
import Chat from "./chat/Chat";
import Support from './support/Support'
import EnterAd from './enterAd/EnterAd'

const Header = () => {
  return (
    <>
    <Box>
      <EnterAd/>
      <Support/>
      <Chat/>
      <MyDivar/>
      <SearchBox/>
      <Categories/>
      <Locations/>
      <Logo />
    </Box>
    </>
  );
};
export default Header;
