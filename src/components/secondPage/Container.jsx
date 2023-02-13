import React from "react";
import * as S from "./ContainerStyle";
import PageHeader from "./secondPageHeader/PageHeader";
import PageMenu from "./secondPageMenu/PageMenu";
import IdentityAcceptPageMain from "./IdentityAcceptPage/IdentityAcceptPageMain";
import { Route, Routes } from "react-router-dom";

const Container = () => {
  return (
    <S.Box>
      <Routes>
        <Route path="identity-accept" element={<IdentityAcceptPageMain />}></Route>
      </Routes>
      <PageHeader />
      <PageMenu />
    </S.Box>
  );
};

export default Container;
