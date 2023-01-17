import React from "react";
import Button from "./ChatStyle";
import chat from "../../../assets/images/chat.svg";

const Chat = () => {
  return (
    <>
      <Button>
        <div>  چت </div>
        <img src={chat} alt="" />
      </Button>
    </>
  );
};
export default Chat;
