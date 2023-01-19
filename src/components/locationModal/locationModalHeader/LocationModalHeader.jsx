import React from "react";
import {
  Box,
  Button,
  HeaderTitle,
  HeaderDes,
  ButtonCity,
  BoxCity,
} from "./LocationModalHeaderStyle";
import closeRed from "../../../assets/images/closeRed.svg";
const LocationModalHeader = () => {
  return (
    <Box>
      <Button> حذف همه</Button>
      <HeaderTitle> انتخاب شهر</HeaderTitle>
      <HeaderDes>.حداقل یک شهر را انتخاب کنید</HeaderDes>
      <BoxCity>
        <ButtonCity>
          <img src={closeRed} />
        </ButtonCity>
        <div>اراک</div>
      </BoxCity><BoxCity>
        <ButtonCity>
          <img src={closeRed} />
        </ButtonCity>
        <div>  تهران</div>
      </BoxCity><BoxCity>
        <ButtonCity>
          <img src={closeRed} />
        </ButtonCity>
        <div>مشهد</div>
      </BoxCity>
    </Box>
  );
};

export default LocationModalHeader;
