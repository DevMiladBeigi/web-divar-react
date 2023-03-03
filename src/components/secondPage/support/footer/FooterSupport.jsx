import React from "react";
import * as S from "./FooterSupportStyle";
import FooterLink from "./footerLink/FooterLink";
import FooterSocial from "./footerSocial/FooterSocial";
const FooterSupport = () => {
  return (
    <S.Box>
      <FooterLink />
      <FooterSocial />
     
    </S.Box>
  );
};
export default FooterSupport;
