import { React } from "react";
import * as S from "./containerStyle";
import CategorieModalMenu from "./categorieModalMenu/CategorieModalMenu";
import CategorieModalShowlinks from "./categorieModalShowLinks/CategorieModalShowLinks";
import useClickOuteSide from "../hooks/useClickOuteSide";
const Container = (props) => {
  let domNode = useClickOuteSide(() => {
    props.setIsOpenModal(false);
  });
  return (
    <S.Backdrop>
      <S.Box ref={domNode}>
        <CategorieModalShowlinks />
        <S.VerticalLine></S.VerticalLine>

        <CategorieModalMenu />
      </S.Box>
    </S.Backdrop>
  );
};

export default Container;
