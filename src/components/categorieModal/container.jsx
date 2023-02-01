import React from "react";
import * as S from "./containerStyle";
import CategorieModalMenu from "./categorieModalMenu/CategorieModalMenu";
import CategorieModalShowlinks from './categorieModalShowLinks/CategorieModalShowLinks'

const Container = () => {
  return (
    <S.Box>
      <S.AllCategory2 href="#">
        <span>همه آگهی های سرگرمی و فراقت </span>
      </S.AllCategory2>
      <CategorieModalShowlinks />
      <S.VerticalLine></S.VerticalLine>
      <CategorieModalMenu />
    </S.Box>
  );
};

export default Container;
