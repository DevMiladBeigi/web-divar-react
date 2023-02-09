import React from "react";
import * as S from "./BusinessStyle";
import shop from "../../../assets/images/shop.svg";
const Business = () => {
  return (
    <>
    <S.Box>
      <S.A href="#"> دیوار برای کسب و کارها </S.A>
      <img src={shop}/>
    
    </S.Box>
    <S.VerticalLine></S.VerticalLine>
    </>
  );
};

export default Business;
