import React, { useContext, useState } from "react";
import * as S from "./ChatSupportStyle";
import close from "../../../../assets/images/close.svg";
import { CategoryContext } from "../../../context/categoryContext";


const defaultNumber = "09359537537";
const ChatSupport = () => {
  const { setShowChatSupport } = useContext(CategoryContext);
  const [value, setValue] = useState("09359537537");


  return (
    <S.Backdrop>
      <S.Box>
        <S.BoxHeader>
          <div>پشتیبانی</div>
          <button onClick={()=>setShowChatSupport(false)}>
            <img src={close} alt="" />
          </button>
        </S.BoxHeader>
        <S.VerticalLine />

        <S.BoxFamilyName>
          <div>برای شروع گفتگو لطفا فرم زیر را تکمیل کنید</div>
          <div>نام و نام خانوادگی</div>
          <input type="text"></input>
        </S.BoxFamilyName>

        <S.BoxPhoneNumber>
          <div> شماره همراه </div>
          <S.BoxCountryCode>+98</S.BoxCountryCode>
          <input
            onChange={(e) => setValue(e.target.value)}
            name="phone"
            tabindex="0"
            autocomplete="tel"
            inputmode="tel"
            defaultValue={defaultNumber}
            type="text"
          />
        </S.BoxPhoneNumber>
        <S.SubmitButton>ادامه</S.SubmitButton>
      </S.Box>
    </S.Backdrop>
  );
};

export default ChatSupport;
