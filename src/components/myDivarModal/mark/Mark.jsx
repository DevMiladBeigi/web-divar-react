import React from "react";
import * as S from "./MarkStyle";
import mark from "../../../assets/images/mark.svg";
import { useContext } from "react";
import { CategoryContext } from "../../context/categoryContext";
const Mark = () => {
  const { Show } = useContext(CategoryContext);

  return (
    <>
      <S.Box>
        <S.TagLink onClick={() => Show()} to="/mark">
          نشان ها
        </S.TagLink>
        <img src={mark} />
      </S.Box>
      <S.VerticalLine></S.VerticalLine>
    </>
  );
};

export default Mark;
