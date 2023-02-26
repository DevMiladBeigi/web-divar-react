import React from "react";
import * as S from "./FooterSocialStyle";
import movie from "../../../../../assets/images/movie.svg";
import linkedin from "../../../../../assets/images/linkedin.svg";
import instagram from "../../../../../assets/images/instagram.svg";
import twitter from "../../../../../assets/images/twitter.svg";
const data = [
  { link: "تماس با پشتیبانی" },
  { link: " پشتیبانی و قوانین" },
  { link: "بلاگ دیوار " },
  { link: " دریافت برنامه" },
  { link: "دربارۀ دیوار" },
];

const dataImage = [
  { image: movie, link: "ok" },
  { image: linkedin, link: "ok" },
  { image: instagram, link: "ok" },
  { image: twitter, link: "ok" },
];

const FooterSocial = () => {
  return (
    <S.Box>
      <S.BoxSocial>
        {dataImage.map((item, index) => (
          <a href={item.link}>
            <img key={index} src={item.image} alt="" />
          </a>
        ))}
      </S.BoxSocial>
      <S.BoxAboutUs>
        {data.map((item, index) => (
          <>
            <a href="#">{item.link}</a>
            <S.HorizontalLine />
          </>
        ))}
      </S.BoxAboutUs>
      <div>دیوار</div>
    </S.Box>
  );
};

export default FooterSocial;
