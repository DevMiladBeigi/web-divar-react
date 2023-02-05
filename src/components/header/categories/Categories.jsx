import { React, useState } from "react";
import { Button } from "./CategoriesStyle";
import downArrow from "../../../assets/images/downArrow.svg";
import Container from "../../categorieModal/container";
import useClickOuteSide from "../../hooks/useClickOuteSide";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const Categories = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleClick = async () => {
    sleep(250).then(() => {
      setIsOpenModal(!isOpenModal);
    });
  };

  return (
    <div>
      <Button  isOpenModal={isOpenModal} onClick={handleClick}>
        <img src={downArrow} alt="" />
        <div>دسته‌ها</div>
      </Button>
      {isOpenModal ? (
        <Container isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />
      ) : null}
    </div>
  );
};
export default Categories;
