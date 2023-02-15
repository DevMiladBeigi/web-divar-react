import React, { useContext } from "react";
import * as S from "./MyAdvertiseStyle";
import paper from "../../../assets/images/paper.svg";
import { CategoryContext } from "../../context/categoryContext";
const MyAdvertise = () => {
  const { Show } = useContext(CategoryContext);

  return (
    <>
      <S.Box>
        <S.TagLink onClick={() => Show()} to="/my-Advertise">
          آگهی های من
        </S.TagLink>{" "}
        <img src={paper} />
      </S.Box>
      <S.VerticalLine></S.VerticalLine>
    </>
  );
};

export default MyAdvertise;
