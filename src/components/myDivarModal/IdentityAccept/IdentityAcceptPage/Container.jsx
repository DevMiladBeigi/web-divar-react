import React from "react";
import * as S from "./ContainerStyle";
import IdentityAcceptPageHeader from "./IdentityAcceptPageHeader/IdentityAcceptPageHeader";
import { IdentityAcceptPageMenu } from "./IdentityAcceptPageMenu/IdentityAcceptPageMenu";
export const Container = () => {
  return (
    <S.Box>
      <IdentityAcceptPageHeader />
      <IdentityAcceptPageMenu/> 
    </S.Box>
  );
};
