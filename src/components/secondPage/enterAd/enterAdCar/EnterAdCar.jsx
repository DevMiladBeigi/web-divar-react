import React from "react";
import * as S from "./EnterAdCarStyle";
import leftArrow from "../../../../assets/images/leftArrow.svg";
import rightArrow from "../../../../assets/images/rightArrow.svg";
const data = [
  {
    title: " خودرو",
  },
  {
    title: "قطعات یدکی و لوازم جانبی ",
  },
  {
    title: "   موتور سیکلت ",
  },
  {
    title: "قایق و سایر وسایل نقلیه   ",
  },
];
const EnterAdCar = (props) => {
  const handler = () => {
    props.setActiveMenu(null);
    props.setShow(false);
  };
  return (
    <div>
      <S.ReturnToAll>
        <div onClick={handler}>بازگشت به همه دسته ها</div>
        <img src={rightArrow} alt="" />
      </S.ReturnToAll>
      <S.HorizontalLine />
      {data.map((item, index) => (
        <div key={index}>
          <S.BoxSingleMenu>
            <S.BoxIcon>
              <img src={leftArrow} alt="" />
            </S.BoxIcon>
            <S.BoxTitleMenu> {item.title}</S.BoxTitleMenu>
          </S.BoxSingleMenu>
          <S.HorizontalLine />
        </div>
      ))}
    </div>
  );
};

export default EnterAdCar;
