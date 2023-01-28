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
      <Button onClick={props.handleChange} name="allSelect">
        حذف همه
      </Button>
      <HeaderTitle> انتخاب شهر</HeaderTitle>

      {props.checkboxs.map((item) => {
        if (item?.isChecked || false) {
          return (
            <BoxCity>
              <ButtonCity name={item.name} onClick={props.remove} id={item.id}>
                <img src={closeRed} />
              </ButtonCity>
              <div>{item.name}</div>
            </BoxCity>
          );
        } else {
          return <div>{item.milad}</div>;
        }
      })}
    </Box>
  );
};

export default LocationModalHeader;
