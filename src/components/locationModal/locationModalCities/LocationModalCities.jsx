import React from "react";
import {
  Box,
  BoxCity,
  HorizontalLine,
  BoxButton,
  ButtonAccept,
  ButtonCancel,
} from "./LocationModalCitiesStyle";
import leftArrow from "../../../assets/images/leftArrow.svg";
import * as S from "./LocationModalCitiesStyle";
const LocationModalCities = (props) => {
  return (
    <>
      <Box>
        <BoxCity>
          <button onClick={props.handlershowComponent}>
            <img src={leftArrow} />
            <span> استان مرکزی </span>
          </button>
        </BoxCity>
      
      </Box>
      <HorizontalLine></HorizontalLine>
      
    </>
  );
};

export default LocationModalCities;
