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
      {/* {props.checkboxs.filter((item) => item?.isChecked == true).length >= 1} */}
      {props.checkboxs.filter((item) => item?.isChecked == true).length >= 1 ? (
        props.checkboxs.map((item) => {
          if (item?.isChecked || false) {
            return (
              <BoxCity>
                <ButtonCity name={item.name} id={item.id}>
                  <img src={closeRed} />
                </ButtonCity>
                <div>{item.name}</div>
              </BoxCity>
            );
          } else {
            return null;
          }
        })
      ) : (
        <div>حداقل یک شهر را انتخاب کنید</div>
      )}
    </Box>
  );
};

export default LocationModalHeader;
