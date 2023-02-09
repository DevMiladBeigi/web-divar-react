import React, { useContext } from "react";
import Button from "./MyDivarStyle";
import user from "../../../assets/images/user.svg";
import Container from "../../myDivarModal/Container";
import {CategoryContext} from '../../context/categoryContext'
import { useState } from "react";
const MyDivar = () => {
  const { isShow } = useContext(CategoryContext)

  const [openModal, setOpenModal] = useState(true);
  return (
    <div style={isShow ? {marginRight:'568px'}: null}>
      <Button openModal={openModal} onClick={() => setOpenModal(!openModal)}>
        <div> دیوار من </div>
        <img src={user} alt="" />
      </Button>
      {openModal ? <Container  /> : null}
    </div>
  );
};
export default MyDivar;
