import React from "react";
import * as S from "./MyAdvertisePageMainStyle";
import imgg from "../../../assets/images/imgg.jpg";
const MyAdvertisePageMain = () => {
  return (
    <>
      <S.Box>
        <S.BoxDescription>
          <S.BoxTitle>
            <div>
              وضعیت آگهی: <span>منتشر شده</span>
            </div>
            <div>گوشی موبایل </div>
          </S.BoxTitle>

          <S.BoxPrice>
            <S.Button>مدیریت آگهی</S.Button>
            <span>100000 تومان</span>
          </S.BoxPrice>
          <S.VerticalLine></S.VerticalLine>
        </S.BoxDescription>

        <S.BoxImage>
          <img src={imgg} />
        </S.BoxImage>
      </S.Box>
    </>
  );
};

export default MyAdvertisePageMain;
