import React from "react";
import * as S from "./LinkTagStyle";
const LinkTag = (props) => {
  return (
   
      props.item.submenu.map((links,index) => (
        <S.LinkTag key={index} to={links.to}>{links.link}</S.LinkTag>
      ))
   
  );
};

export default LinkTag;
//  <S.LinkTag></S.LinkTag>
