import React, { useContext } from "react";
import * as S from "./RecentVisitsStyle";
import stopwatch from "../../../assets/images/stopwatch.svg";
import { CategoryContext } from "../../context/categoryContext";
const RecentVisits = () => {
  const { Show } = useContext(CategoryContext);

  return (
    <>
      <S.Box>
        <S.TagLink onClick={() => Show()} to="/recent-visits">
          بازدیدهای اخیر
        </S.TagLink>
        <img src={stopwatch} />
      </S.Box>
      <S.VerticalLine></S.VerticalLine>
    </>
  );
};

export default RecentVisits;
