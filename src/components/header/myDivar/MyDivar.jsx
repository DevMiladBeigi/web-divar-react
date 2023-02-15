import React, { useContext } from "react";
import Button from "./MyDivarStyle";
import user from "../../../assets/images/user.svg";
import Container from "../../myDivarModal/Container";
import { CategoryContext } from "../../context/categoryContext";
const MyDivar = () => {
  const { isShow, isopenModal, OpenModal } = useContext(CategoryContext);

  return (
    <div style={isShow ? { marginRight: "568px" } : null}>
      <Button isopenModal={isopenModal} onClick={() => OpenModal()}>
        <div> دیوار من </div>
        <img src={user} alt="" />
      </Button>
      {isopenModal ? <Container /> : null}
    </div>
  );
};
export default MyDivar;
