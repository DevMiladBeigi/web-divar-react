import React, { useContext } from "react";
import * as S from "./FooterLinkStyle";
import support from "../../../../../assets/images/support.svg";
import { CategoryContext } from "../../../../context/categoryContext";

const data = [
  {
    title: "شرایط و قوانین کلی استفاده از دیوار",
    description:
      "دریافت خدمات از سایت و اپلیکیشن دیوار در گرو رعایت شرایط و قوانین دیوار است. لطفاً پیش از استفاده از خدمات دیوار، شرایط و قوانین را به صورت کامل و با دقت مطالعه کنید.",
    link: "مشاهدهٔ شرایط و قوانین",
  },

  {
    title: "راهنمای خرید امن",
    description:
      " مطالعهٔ راهنمای خرید امن قبل و هنگام معامله احتمال کلاهبرداری را کاهش می‌دهد. لطفا پیش از انجام هرگونه خرید و فروش، راهنمای خرید امن را با دقت مطالعه کنید. ",
    link: "مشاهدهٔ راهنمای خرید امن",
  },

  {
    title: "انتقادات و پیشنهادات",
    description:
      " به منظور بهبود تجربهٔ کاربری و خدمات دیوار و همچنین افزایش رضایت کاربران، خوشحال می‌شویم با ارسال انتقادات و پیشنهادهای خود، ما را در بهبود کیفیت ارائهٔ خدمات یاری نمائید. ",
    link: "  ثبت انتقاد و پیشنهاد ",
  },
];
const FooterLink = () => {
  const {ShowChatSupportModal}=useContext(CategoryContext)
  return (
    <S.Box>
      {data.map((item, index) => (
        <S.BoxItem key={index}>
          <div>
            <S.BoxTitleHeader>{item.title}</S.BoxTitleHeader>
            <S.BoxTitleBody>{item.description}</S.BoxTitleBody>
            <S.BoxTitleFooter href="#">{item.link}</S.BoxTitleFooter>
          </div>
        </S.BoxItem>
      ))}

      <S.Button onClick={ShowChatSupportModal}>
        <img src={support} alt="" />
      </S.Button>
    </S.Box>
  );
};

export default FooterLink;
