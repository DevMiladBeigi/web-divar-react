import React, { useState } from "react";
import * as S from "./PrepaymentPageStyle";
const PrepaymentPage = () => {
  const [Change, setChange] = useState(true);
  const [isShow, setIsShow] = useState(true);
  const HandlerSell = () => {
    setChange(false);
    setIsShow(false);
  };

  const HandlerBye = () => {
    setChange(true);
    setIsShow(true);
  };
  return (
    <S.Box>
      <S.Title>
        {isShow
          ? " تاریخچهٔ بیعانه فقط تا ۳۰ روز نمایش داده می‌شود"
          : "شما هنوز برای آگهی بیعانه فعال نکرده اید"}
      </S.Title>

      <S.Button
        style={Change ? null : { color: "#a62626", backgroundColor: "#ffe8e8" }}
        onClick={HandlerSell}
        Change={Change}
      >
        برای فروش
      </S.Button>
      <S.Button
        style={Change ? { color: "#a62626", backgroundColor: "#ffe8e8" } : null}
        onClick={HandlerBye}
        Change={Change}
      >
        برای خرید
      </S.Button>
      <S.VerticalLine />
      <S.VerticalLine2 />
      <S.Title2>هنوز پیشنهاد بیعانه ارسال نکرده‌اید</S.Title2>
      <S.LineActive
        style={
          Change
            ? { transition: "1s", left: "525px" }
            : { transition: "1s", left: "400px" }
        }
      />
    </S.Box>
  );
};

export default PrepaymentPage;
