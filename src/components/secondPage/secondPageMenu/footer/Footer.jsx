import React from "react";
import * as S from "./FotterStyle";
import movie from '../../../../assets/images/movie.svg'
import linkedin from '../../../../assets/images/linkedin.svg'
import instagram from '../../../../assets/images/instagram.svg'
import twitter from '../../../../assets/images/twitter.svg'
const Fotter = () => {
  return (
    <S.Box>
      <S.A>درباره دیوار</S.A>
      <S.A>دریافت برنامه </S.A>
      <S.A>بلاگ دیوار</S.A>
      <S.A>کسب و کارها </S.A>
      <S.A>پشتیبانی و قوانین </S.A>
      <S.BoxIcon>

      <S.A><img src={movie}></img></S.A>
      <S.A><img src={linkedin}></img></S.A>
      <S.A><img src={instagram}></img></S.A>
      <S.A><img src={twitter}></img></S.A>



      </S.BoxIcon>
    </S.Box>
  );
};

export default Fotter;
