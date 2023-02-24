import React, { useContext } from "react";
import * as S from "./SupportStyle";
import {CategoryContext} from '../../context/categoryContext'

const Support = () => {
  const { ShowChatFan } = useContext(CategoryContext);

  return (
    <>
        <S.TagLink onClick={() => ShowChatFan()} to="/support">
           <div>پشتیبانی</div>
        </S.TagLink>
    </>
  );
};
export default Support;
