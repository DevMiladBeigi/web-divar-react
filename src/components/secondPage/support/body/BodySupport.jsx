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
import LinkTitle from "./linkTitle/LinkTitle";
import LinkTag from "./linkTag/LinkTag";
const data = [
  {
    title: " دیوار کسب و کارها    ",
    image: s8,
    to: "/store",
    submenu: [
      {
        link: "چگونه در «دیوار» حساب کاربری بسازم؟",
        to: "/",
      },
      {
        link: "چگونه اپلیکیشن دیوار را دانلود کنم؟",
        to: "/",
      },
      {
        link: "آیا برای ثبت آگهی باید حساب کاربری بسازم؟",
        to: "/",
      },
      {
        link: "چگونه وارد حساب خود شوم؟",
        to: "/",
      },
      {
        link: "چگونه از حساب کاربری خود خارج شوم؟",
        to: "/",
      },
    ],
  },
  {
    title: " تخلفات و گزارش ها    ",
    image: s7,
    to: "/home",
    submenu: [
      {
        link: "چگونه در «دیوار» حساب کاربری بسازم؟",
        to: "/",
      },
      {
        link: "چگونه اپلیکیشن دیوار را دانلود کنم؟",
        to: "/",
      },
      {
        link: "آیا برای ثبت آگهی باید حساب کاربری بسازم؟",
        to: "/",
      },
      {
        link: "چگونه وارد حساب خود شوم؟",
        to: "/",
      },
      {
        link: "چگونه از حساب کاربری خود خارج شوم؟",
        to: "/",
      },
    ],
  },
  {
    title: "    پرداخت و موارد مالی   ",
    image: s6,
    to: "/car",
    submenu: [
      {
        link: "چگونه در «دیوار» حساب کاربری بسازم؟",
        to: "/",
      },
      {
        link: "چگونه اپلیکیشن دیوار را دانلود کنم؟",
        to: "/",
      },
      {
        link: "آیا برای ثبت آگهی باید حساب کاربری بسازم؟",
        to: "/",
      },
      {
        link: "چگونه وارد حساب خود شوم؟",
        to: "/",
      },
      {
        link: "چگونه از حساب کاربری خود خارج شوم؟",
        to: "/",
      },
    ],
  },
  {
    title: "   چت دیوار    ",
    image: s5,
    to: "/car",
    submenu: [
      {
        link: "چگونه در «دیوار» حساب کاربری بسازم؟",
        to: "/",
      },
      {
        link: "چگونه اپلیکیشن دیوار را دانلود کنم؟",
        to: "/",
      },
      {
        link: "آیا برای ثبت آگهی باید حساب کاربری بسازم؟",
        to: "/",
      },
      {
        link: "چگونه وارد حساب خود شوم؟",
        to: "/",
      },
      {
        link: "چگونه از حساب کاربری خود خارج شوم؟",
        to: "/",
      },
    ],
  },
  {
    title: "  نمایش و جستجوی آگهی  ",
    image: s4,
    to: "/car",
    submenu: [
      {
        link: "چگونه در «دیوار» حساب کاربری بسازم؟",
        to: "/",
      },
      {
        link: "چگونه اپلیکیشن دیوار را دانلود کنم؟",
        to: "/",
      },
      {
        link: "آیا برای ثبت آگهی باید حساب کاربری بسازم؟",
        to: "/",
      },
      {
        link: "چگونه وارد حساب خود شوم؟",
        to: "/",
      },
      {
        link: "چگونه از حساب کاربری خود خارج شوم؟",
        to: "/",
      },
    ],
  },
  {
    title: "    بررسی و رد آگهی   ",
    image: s3,
    to: "/car",
    submenu: [
      {
        link: "چگونه در «دیوار» حساب کاربری بسازم؟",
        to: "/",
      },
      {
        link: "چگونه اپلیکیشن دیوار را دانلود کنم؟",
        to: "/",
      },
      {
        link: "آیا برای ثبت آگهی باید حساب کاربری بسازم؟",
        to: "/",
      },
      {
        link: "چگونه وارد حساب خود شوم؟",
        to: "/",
      },
      {
        link: "چگونه از حساب کاربری خود خارج شوم؟",
        to: "/",
      },
    ],
  },
  {
    title: " ثبت و مدیریت آگهی   ",
    image: s2,
    to: "/car",
    submenu: [
      {
        link: "چگونه در «دیوار» حساب کاربری بسازم؟",
        to: "/",
      },
      {
        link: "چگونه اپلیکیشن دیوار را دانلود کنم؟",
        to: "/",
      },
      {
        link: "آیا برای ثبت آگهی باید حساب کاربری بسازم؟",
        to: "/",
      },
      {
        link: "چگونه وارد حساب خود شوم؟",
        to: "/",
      },
      {
        link: "چگونه از حساب کاربری خود خارج شوم؟",
        to: "/",
      },
    ],
  },
  {
    title: "       ورود و حساب کاربری    ",
    image: s1,
    to: "/car",
    submenu: [
      {
        link: "چگونه در «دیوار» حساب کاربری بسازم؟",
        to: "/",
      },
      {
        link: "چگونه اپلیکیشن دیوار را دانلود کنم؟",
        to: "/",
      },
      {
        link: "آیا برای ثبت آگهی باید حساب کاربری بسازم؟",
        to: "/",
      },
      {
        link: "چگونه وارد حساب خود شوم؟",
        to: "/",
      },
      {
        link: "چگونه از حساب کاربری خود خارج شوم؟",
        to: "/",
      },
    ],
  },
];

const BodySupport = () => {
  return (
    <S.Box>
      {data.map((item, index) => (
        <S.BoxItem key={index}>
          <div>
            <img src={item.image} alt="" />
          </div>
          <LinkTitle title={item.title} to={item.to} />
          <LinkTag item={item} submenu={item.submenu} />
          <S.LinkMoreTag to="">بیشتر</S.LinkMoreTag>
        </S.BoxItem>
      ))}
      <S.Verticalline />
    </S.Box>
  );
};
export default BodySupport;
