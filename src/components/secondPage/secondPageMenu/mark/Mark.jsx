import React from "react";
import * as S from "./MarkStyle";
import mark from "../../../../assets/images/mark.svg";
const Mark = () => {
  return (
    <>
    <S.Box>
      <S.A href="#"> نشان ها</S.A>
      <img src={mark}/>
    
    </S.Box>
    </>
  );
};

export default Mark;
