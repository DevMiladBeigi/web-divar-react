import { React, useState } from "react";
import * as S from "./CategorieModalKitchenStyle";
import kitchen from "../../../assets/images/kitchen.png";
const CategorieModalHome = () => {
  return (
    <>
      <S.Image src={kitchen} alt="#" />
      <S.AllCategory2 href="#">
        <span>    همه آگهی های خانه و آشپزخانه   </span>
      </S.AllCategory2>
      <S.aTitle href="www.google.com"> لوازم خانگی برقی </S.aTitle>
      <S.A>یخچال و فریزر  </S.A>
      <S.A>ماشین لباسشویی</S.A>
    </>
  );
};
export default CategorieModalHome;
