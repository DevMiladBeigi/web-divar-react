import { React, useContext } from "react";
import * as S from "./IdentityAcceptStyle";
import accept from "../../../../assets/images/accept.svg";
import { CategoryContext } from "../../../context/categoryContext";
import { Link } from "react-router-dom";

const IdentityAccept = () => {
  const { Show,isShow } = useContext(CategoryContext);
  return (
    <>
      <S.Box>
        <S.TagLink isShow={isShow} onClick={() => Show()} to="/identity-accept">
          تایید هویت
        </S.TagLink>
        <img src={accept} />
      </S.Box>
    </>
  );
};

export default IdentityAccept;
