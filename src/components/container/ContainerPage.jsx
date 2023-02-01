import React from "react";
import Box from "./ContainerPageStyle";
import Header from "../header/Header";
import RightSidebar from "../rightSidebar/RightSidebar";
import Main from "../main/Main";
import Container from '../categorieModal/container'
const ContainerPage = () => {
  return (
    <div>
       

      <Box>
        <Header />
        <Container/>
        {/* <Main/>
        <RightSidebar /> */}
        
      </Box>
    </div>
  );
};

export default ContainerPage;
