import React from "react";
import * as S from "./RecentVisitsPageStyle";
import imgg from "../../../assets/images/imgg.jpg";
import share from "../../../assets/images/share.svg";
import deletee from "../../../assets/images/deletee.svg";
const RecentVisitsPage = () => {
  return (
    <S.Box>
      <S.BoxMark>
        <S.BoxDescriptions>
          <S.BoxDescriptionsTitle>گوشی سامسونگ</S.BoxDescriptionsTitle>
          <S.BoxDescriptionsTime> یک هفته قبل در</S.BoxDescriptionsTime>
          <S.BoxIcon>
            <img src={deletee} />
            <img src={share} />
          </S.BoxIcon>
        </S.BoxDescriptions>
        <S.BoxImage>
          <img src={imgg} />
        </S.BoxImage>
      </S.BoxMark>
    </S.Box>
  );
};

export default RecentVisitsPage;
