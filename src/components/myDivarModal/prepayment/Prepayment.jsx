import React from "react";
import * as S from "./PrepaymentStyle";
import wallet from "../../../assets/images/wallet.svg";
const Prepayment = () => {
  return (
    <>
    <S.Box>
      <S.A href="#">  بیعانه</S.A>
      <img src={wallet}/>
    
    </S.Box>
    <S.VerticalLine></S.VerticalLine>
    </>
  );
};

export default Prepayment;
