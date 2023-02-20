import { React, useContext } from "react";
import * as S from "./ChatStyle";
import chat from "../../../assets/images/chat.svg";
import { CategoryContext } from "../../context/categoryContext";

const Chat = () => {
  const { ShowChatFan } = useContext(CategoryContext);

  return (
    <>
      <S.TagLink onClick={() => ShowChatFan()} to='/chat'>
        <div> چت </div>
        <img src={chat} alt="" />
      </S.TagLink>
    </>
  );
};
export default Chat;
