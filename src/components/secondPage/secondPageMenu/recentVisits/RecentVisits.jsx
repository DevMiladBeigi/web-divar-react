import React from "react";
import * as S from "./RecentVisitsStyle";
import stopwatch from "../../../../assets/images/stopwatch.svg";
const RecentVisits = () => {
  return (
    <>
    <S.Box>
      <S.A href="#">  بازدیدهای اخیر</S.A>
      <img src={stopwatch}/>
    </S.Box>
    </>
  );
};

export default RecentVisits;
