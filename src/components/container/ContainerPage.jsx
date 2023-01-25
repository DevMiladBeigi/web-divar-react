import React from "react";
import Box from "./ContainerPageStyle";
import Header from "../header/Header";
import RightSidebar from "../rightSidebar/RightSidebar";
import Main from "../main/Main";
import LocationModalSelectCity from "../locationModal/locationModalSelectCity/LocationModalSelectCity";
const ContainerPage = () => {
  return (
    <div>
      <Box>
        <Header />
        {/* <Main/>
        <RightSidebar /> */}

      </Box>
    </div>
  );
};

export default ContainerPage;
