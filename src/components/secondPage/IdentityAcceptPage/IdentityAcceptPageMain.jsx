import React from "react";
import * as S from "./IdentityAcceptPageMainStyle";
const IdentityAcceptPageMain = () => {
  return (
    <S.Box>
      <S.Title>تأیید هویت شده</S.Title>
      <S.Message>هویت شما تایید شده است </S.Message>
      <S.Message>
       
        توجه: در صورت فروش سیم‌کارت خود، حتماً با پشتیبانی دیوار تماس بگیرید تا
        تأیید هویت شما را از سیم‌کارت واگذار شده لغو کنیم 
      </S.Message>
    </S.Box>
  );
};

export default IdentityAcceptPageMain;
