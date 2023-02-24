import React from "react";
import * as S from "./BodySupportStyle";
import s1 from "../../../../assets/images/s1.png";
import s2 from "../../../../assets/images/s2.png";
import s3 from "../../../../assets/images/s3.png";
import s4 from "../../../../assets/images/s4.png";
import s5 from "../../../../assets/images/s5.png";
import s6 from "../../../../assets/images/s6.png";
import s7 from "../../../../assets/images/s7.png";
import s8 from "../../../../assets/images/s8.png";
const dataTitle = [
  {
    title: " دیوار کسب و کارها    ",
    image: s8,
    to: "/store",
  },
  {
    title: " تخلفات و گزارش ها    ",
    image: s7,
    to: "/home",
  },
  {
    title: "    پرداخت و موارد مالی   ",
    image: s6,
    to: "/car",
  },
  {
    title: "   چت دیوار    ",
    image: s5,
    to: "/car",
  },
  {
    title: "  نمایش و جستجوی آگهی  ",
    image: s4,
    to: "/car",
  },
  {
    title: "    بررسی و رد آگهی   ",
    image: s3,
    to: "/car",
  },
  {
    title: " ثبت و مدیریت آگهی   ",
    image: s2,
    to: "/car",
  },
  {
    title: "       ورود و حساب کاربری    ",
    image: s1,
    to: "/car",
  },
];

const BodySupport = () => {
  return (
    <S.Box>
      {dataTitle.map((item) => (
        <S.BoxItem>
          <div>
            <img src={item.image} />
          </div>
          <S.LinkTitle to={item.to}> {item.title} </S.LinkTitle>

          <S.LinkTag to=""> همکاری </S.LinkTag>

          <S.LinkMoreTag to=""> موارد بیشتر </S.LinkMoreTag>
        </S.BoxItem>
      ))}
    </S.Box>
  );
};
export default BodySupport;
