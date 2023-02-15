import { React, useContext } from "react";
import * as S from "./IdentityAcceptStyle";
import accept from "../../../assets/images/accept.svg";
import { CategoryContext } from "../../context/categoryContext";

const IdentityAccept = () => {
  const { Show } = useContext(CategoryContext);
  return (
    <>
      <S.Box>
        <S.TagLink onClick={() => Show()} to="/identity-accept">
          تایید هویت
        </S.TagLink>
        <img src={accept} />
      </S.Box>
      <S.VerticalLine></S.VerticalLine>
    </>
  );
};

export default IdentityAccept;
