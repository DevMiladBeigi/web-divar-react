import { React, useState } from "react";
import * as S from "./CategorieModalDigitalStyle";
import digital from "../../../assets/images/digital.png";
const CategorieModalHome = () => {
  return (
    <>
      <S.Image src={digital} alt="#" />
      <S.AllCategory2 href="#">
        <span>    همه آگهی های کالای دیجیتال  </span>
      </S.AllCategory2>
      <S.aTitle href="www.google.com">موبایل و تبلت</S.aTitle>
      <S.A>گوشی موبایل</S.A>
      <S.A>تبلت</S.A>
    </>
  );
};
export default CategorieModalHome;
