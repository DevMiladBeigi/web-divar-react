import React from "react";
import * as S from "./PageHeaderStyle";
import Header from "../../header/Header";
const PageHeader = () => {
  return (
    <S.Box>
      <Header />
      <S.verticalLine/>
    </S.Box>
  );
};

export default PageHeader;
