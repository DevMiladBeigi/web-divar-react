import React, { useContext } from "react";
import * as S from "./UserDivarStyle";
import user from "../../../assets/images/user.svg";
import {} from '../../context/categoryContext'
const UserDivar = () => {
  return (
    <S.Box>
      <S.BoxTitle>
        کاربر دیوار
      <img src={user}></img>
      </S.BoxTitle>

      <S.BoxNumber>تلفن 09359537537</S.BoxNumber>
      <S.VerticalLine ></S.VerticalLine>
    </S.Box>
  );
};

export default UserDivar;
