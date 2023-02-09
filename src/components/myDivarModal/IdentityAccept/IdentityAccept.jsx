import  { React,useContext } from "react";
import * as S from "./IdentityAcceptStyle";
import accept from "../../../assets/images/accept.svg";
import {CategoryContext} from "../../context/categoryContext";
const IdentityAccept = () => {
  const { Show } = useContext(CategoryContext)
  return (
    <>
      <S.Box >
        <S.A onClick={()=>Show()} href="#">
          تایید هویت
        </S.A>
        <img src={accept} />
      </S.Box>
      <S.VerticalLine></S.VerticalLine>
    </>
  );
};

export default IdentityAccept;
