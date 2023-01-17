import React from "react";
import Button from "./CategoriesStyle";
import downArrow from "../../../assets/images/downArrow.svg";

const Categories = () => {
  return (
    <>
      <Button>
        <img src={downArrow} alt="" />
        <div>دسته‌ها</div>
      </Button>
    </>
  );
};
export default Categories;
