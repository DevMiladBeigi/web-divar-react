import React, { useContext, useState } from "react";
import CategorieModalHome from "../categorieModalHome/CategorieModalHome";
import * as S from "./CategorieModalShowLinksStyle";
import { CategoryContext } from "../../context/categoryContext";
import CategorieModalCar from "../categorieModalCar/CategorieModalCar";
import CategorieModalDigital from "../categorieModalِDigital/CategorieModalDigital";
import CategorieModalKitchen from "../categorieModalKitchen/CategorieModalKitchen";
export const CategorieModalShowlinks = () => {
  const { isHome, isCar, isDigital, isKitchen } = useContext(CategoryContext);
  return (
    <S.Box>
      {isHome ? <CategorieModalHome /> : null}
      {isCar ? <CategorieModalCar /> : null}
      {isDigital ? <CategorieModalDigital /> : null}
      {isKitchen ? <CategorieModalKitchen /> : null}
    </S.Box>
  );
};

export default CategorieModalShowlinks;
