import React from "react";
import Box from "./HeaderStyle";
import Logo from "./logo/Logo";
import Locations from "./locations/Locations";
const Header = () => {
  return (
    <Box>
      <Locations/>
      <Logo />
    </Box>
  );
};
export default Header;
