import React, { useContext } from "react";
import * as S from "./BusinessStyle";
import shop from "../../../assets/images/shop.svg";
import { CategoryContext } from "../../context/categoryContext";
const Business = () => {
  const { Show } = useContext(CategoryContext);

  return (
    <>
      <S.Box>
        <S.TagLink onClick={() => Show()} to="/business">
          دیوار برای کسب و کارها
        </S.TagLink>
        <img src={shop} />
      </S.Box>
      <S.VerticalLine></S.VerticalLine>
    </>
  );
};

export default Business;
