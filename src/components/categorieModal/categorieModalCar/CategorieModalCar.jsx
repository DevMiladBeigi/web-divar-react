import  React from "react";
import * as S from "./CategorieModalCarStyle";
import car from "../../../assets/images/car.png";
const CategorieModalHome = () => {
  return (
    <>
      <S.Image src={car} alt="#" />
      <S.AllCategory2 href="#">
        <span>    همه آگهی های وسایل نقلیه </span>
      </S.AllCategory2>
      <S.aTitle href="www.google.com">خودرو</S.aTitle>
      <S.A>سواری و وانت</S.A>
      <S.A>کلاسیک</S.A>
    </>
  );
};
export default CategorieModalHome;
