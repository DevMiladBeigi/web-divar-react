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
      <Button onClick={props.removeAllCity}> حذف همه</Button>
      <HeaderTitle> انتخاب شهر</HeaderTitle>

      {props.checked.length
        ? props.checked.map((item) => (
            <BoxCity key={item}>
              <ButtonCity onClick={()=>props.filterHandler(item)} >
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
