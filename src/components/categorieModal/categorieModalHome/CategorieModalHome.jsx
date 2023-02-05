import { React, useContext, useState } from "react";
import * as S from "./CategorieModalHomeStyle";
import home2 from "../../../assets/images/home2.png";
const CategorieModalHome = () => {
  return (
    <>
      <S.AllCategory2 href="#">
        <span>    همه آگهی های املاک </span>
      </S.AllCategory2>
      <S.Image src={home2} alt="#" />
      <S.aTitle href="www.google.com">مسکونی</S.aTitle>
      <S.A>زمین</S.A>
      <S.A>زمین</S.A>
    </>
  );
};
export default CategorieModalHome;
