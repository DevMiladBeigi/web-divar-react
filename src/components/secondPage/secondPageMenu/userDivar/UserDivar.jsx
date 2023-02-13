import React from "react";
import * as S from "./UserDivarStyle";
import user from "../../../../assets/images/user.svg";
const UserDivar = () => {
  return (
    <S.Box>
      <S.BoxTitle>
        کاربر دیوار
      <img src={user}></img>
      </S.BoxTitle>

      <S.BoxNumber>تلفن 09359537537</S.BoxNumber>
    </S.Box>
  );
};

export default UserDivar;
