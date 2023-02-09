import React from "react";
import * as S from "./ExitStyle";
import exit from "../../../assets/images/exit.svg";
const Exit = () => {
  return (
    <>
    <S.Box>
      <S.A href="#">  خروج</S.A>
      <img src={exit}/>
    
    </S.Box>
    </>
  );
};

export default Exit;
