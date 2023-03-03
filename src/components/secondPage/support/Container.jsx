import React, { useContext } from "react";
import * as S from "./ContainerStyle";
import HeaderSupport from "./header/HeaderSupport";
import FooterSupport from "./footer/FooterSupport";
import BodySupport from "./body/BodySupport";
import ChatSupport from "./chatSupport/ChatSupport";
import { CategoryContext } from "../../context/categoryContext";

const ContainerSupport = () => {
  const  {showChatSupport}  = useContext(CategoryContext);
  return (
    <S.Box showChatSupport={showChatSupport}>
      <HeaderSupport />
      <BodySupport />
      <FooterSupport />

      {showChatSupport ? <ChatSupport /> : null}
    </S.Box>
  );
};
export default ContainerSupport;
