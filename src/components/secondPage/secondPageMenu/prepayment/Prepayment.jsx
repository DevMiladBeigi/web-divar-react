import React, { useContext } from "react";
import * as S from "./PrepaymentStyle";
import wallet from "../../../../assets/images/wallet.svg";
import {CategoryContext} from '../../../context/categoryContext'
const Prepayment = () => {
  const { Show } = useContext(CategoryContext);

  return (
    <>
    <S.Box>
    <S.TagLink onClick={() => Show()} to="/prepayment">
          امکان بیعانه
        </S.TagLink>      <img src={wallet}/>
    
    </S.Box>
    </>
  );
};

export default Prepayment;
