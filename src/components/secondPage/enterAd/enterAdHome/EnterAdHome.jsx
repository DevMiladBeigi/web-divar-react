import React from "react";
import * as S from "./EnterAdHomeStyle";
import leftArrow from "../../../../assets/images/leftArrow.svg";
import rightArrow from "../../../../assets/images/rightArrow.svg";
const data = [
  {
    title: "اجاره مسکونی",
    title1: "اجاره مسکونی",
  },
  {
    title: "فروش مسکونی",
    title1: "اجاره مسکونی",
  },
  {
    title: " فروش اداری و تجاری",
    title1: "اجاره مسکونی",
  },
  {
    title: "اجاره اداری و تجاری",
    title1: "اجاره مسکونی",
  },
  {
    title: "اجاره کوتاه مدت",
    title1: "اجاره مسکونی",
  },
  {
    title: " پروژه های  ساخت و ساز ",
    title1: "اجاره مسکونی",
  },
];
const EnterAdHome = (props) => {
  const handler = () => {
    props.setActiveMenu(null);
    props.setShow(false);
  };
  return (
    <div>
      <S.ReturnToAll>
        <div 
        // onClick={handler}
        >بازگشت به همه دسته ها</div>
        <img src={rightArrow} alt="" />
      </S.ReturnToAll>
      <S.HorizontalLine />
      {data.map((item, index) => (
        <div key={index}>
          {console.log(item)}
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

export default EnterAdHome;
