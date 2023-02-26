import React from "react";
import * as S from "./ContainerStyle";
import HeaderSupport from "./header/HeaderSupport";
import FooterSupport from "./footer/FooterSupport";
import BodySupport from "./body/BodySupport";

const ContainerSupport = () => {
  return (
    <S.Box>
      <HeaderSupport />
      <BodySupport />
      <FooterSupport />
    </S.Box>
  );
};
export default ContainerSupport;
