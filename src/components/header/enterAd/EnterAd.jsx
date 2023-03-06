import React, { useContext } from "react";
import { CategoryContext } from "../../context/categoryContext";
import * as S from  './EnterAdStyle'
const EnterAd = () => {
  const { ShowChatFan } = useContext(CategoryContext);

  return (
    <>
      <S.TagLink onClick={() => ShowChatFan()} to='/new'>
        <div>  ثبت آگهی </div>
      </S.TagLink>
    </>
  );
};
export default EnterAd;
