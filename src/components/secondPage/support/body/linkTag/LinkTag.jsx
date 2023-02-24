import React from "react";
import * as S from "./LinkTagStyle";
const LinkTag = (props) => {
  return props.Submenu.map((itemm, index) => (
    <S.LinkTag key={index}>{itemm.link}</S.LinkTag>
  ));
};

export default LinkTag;
//  <S.LinkTag></S.LinkTag>
