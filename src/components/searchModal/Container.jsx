import React from "react";
import useClickOuteSide from "../hooks/useClickOuteSide";
import * as S from "./ContainerStyle";
const Container = (props) => {
  let domNode = useClickOuteSide(() => {
    props.setOpenModal(false);
  });

  return (
    <S.Backdrop>
      <S.Box ref={domNode}>
        <div>جستجوی {props.query}</div>
      </S.Box>
    </S.Backdrop>
  );
};
export default Container;
