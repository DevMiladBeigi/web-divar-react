import React, { useContext } from "react";
import * as S from "./CategorieModalMenuStyle";
import rightArrow from "../../../assets/images/rightArrow.svg";
import leftArrow from "../../../assets/images/leftArrow.svg";
import home from "../../../assets/images/home.svg";
import car from "../../../assets/images/car.svg";
import mobile from "../../../assets/images/mobile.svg";
import lamp from "../../../assets/images/lamp.svg";
import brush from "../../../assets/images/brush.svg";
import watch from "../../../assets/images/watch.svg";
import game from "../../../assets/images/game.svg";
import users from "../../../assets/images/users.svg";
import microphone from "../../../assets/images/microphone.svg";
import bag from "../../../assets/images/bag.svg";
import { CategoryContext } from "../../context/categoryContext";
const CategorieModalMenu = () => {
  const { isHome, isCar, isDigital, isKitchen,ShowDigital,ShowKitchen, ShowHome, ShowCar } =
    useContext(CategoryContext);

  return (
    <S.BoxMenu>
      <S.AllCategory href="#">
        <span>همه آگهی ها</span>
        <img src={rightArrow} alt="" />
      </S.AllCategory>

      <S.A
        style={isHome ? { background: "#f3f3f3" } : null}
        onMouseEnter={() => ShowHome()}
      >
        <img src={leftArrow} alt="" />
        <span>
          املاک
          <img src={home} alt="" />
        </span>
      </S.A>

      <S.A   style={isCar ? { background: "#f3f3f3" } : null} onMouseEnter={() => ShowCar()}>
        <img src={leftArrow} alt="" />
        <span>
          وسایل نقلیه
          <img src={car} alt="" />
        </span>
      </S.A>


      <S.A  style={isDigital ? { background: "#f3f3f3" } : null}  onMouseEnter={() => ShowDigital()}>
        <img src={leftArrow} alt="" />
        <span>
          کالای دیجیتال
          <img src={mobile} alt="" />
        </span>
      </S.A>
      <S.A   style={isKitchen ? { background: "#f3f3f3" } : null}  onMouseEnter={() => ShowKitchen()}>
        <img src={leftArrow} alt="" />
        <span>
          خانه و آشپزخانه
          <img src={lamp} alt="" />
        </span>
      </S.A>
      <S.A>
        <img src={leftArrow} alt="" />
        <span>
          خدمات
          <img src={brush} alt="" />
        </span>
      </S.A>
      <S.A>
        <img src={leftArrow} alt="" />
        <span>
          وسایل شخصی
          <img src={watch} alt="" />
        </span>
      </S.A>
      <S.A>
        <img src={leftArrow} alt="" />
        <span>
          سرگرمی و فراقت
          <img src={game} alt="" />
        </span>
      </S.A>
      <S.A>
        <img src={leftArrow} alt="" />
        <span>
          اجتماعی
          <img src={users} alt="" />
        </span>
      </S.A>
      <S.A>
        <img src={leftArrow} alt="" />
        <span>
          تجهیزات و صنعتی
          <img src={microphone} alt="" />
        </span>
      </S.A>
      <S.A>
        <img src={leftArrow} alt="" />
        <span>
          استخدام و کاریابی
          <img src={bag} alt="" />
        </span>
      </S.A>
    </S.BoxMenu>
  );
};
export default CategorieModalMenu;
