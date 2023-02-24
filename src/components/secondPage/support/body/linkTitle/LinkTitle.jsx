import React from "react";
import * as S from "./LinkTitleStyle";
const LinkTitle = (props) => {
  return <S.LinkTitle to={props.to}>{props.title}</S.LinkTitle>;
};

export default LinkTitle;
