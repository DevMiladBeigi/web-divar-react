import React, { useState } from "react";
import {
  Box,
  Button,
  HeaderTitle,
  HeaderDes,
  ButtonCity,
  BoxCity,
} from "./LocationModalHeaderStyle";
import closeRed from "../../../assets/images/closeRed.svg";
const LocationModalHeader = (props) => {


  return (
    <Box>
      <Button> حذف همه</Button>
      <HeaderTitle> انتخاب شهر</HeaderTitle>

      {props.checked.length
        ? props.checked.map((item) => (
            <BoxCity>
              <ButtonCity>
                <img src={closeRed} />
              </ButtonCity>
              <div>{item}</div>
            </BoxCity>
          ))
        : "یک شهر را انتخاب کنید"}
    </Box>
  );
};

export default LocationModalHeader;
