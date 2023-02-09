import React from "react";
import * as S from "./MyAdvertiseStyle";
import paper from "../../../assets/images/paper.svg";
const MyAdvertise = () => {
  return (
    <>
    <S.Box>
      <S.A href="#"> آگهی های من</S.A>
      <img src={paper}/>
    
    </S.Box>
    <S.VerticalLine></S.VerticalLine>
    </>
  );
};

export default MyAdvertise;
