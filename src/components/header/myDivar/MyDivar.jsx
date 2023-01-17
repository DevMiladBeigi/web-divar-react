import React from "react";
import Button from "./MyDivarStyle";
import user from "../../../assets/images/user.svg";

const MyDivar = () => {
  return (
    <>
      <Button>
        <div> دیوار من </div>
        <img src={user} alt="" />
      </Button>
    </>
  );
};
export default MyDivar;
