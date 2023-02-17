import React, { useState } from "react";
import * as S from "./BusinessPageStyle";
import b1 from "../../../assets/images/b1.svg";
import b2 from "../../../assets/images/b2.svg";
import b3 from "../../../assets/images/b3.svg";
import leftArrow from "../../../assets/images/leftArrow.svg";
const BusinessPage = () => {
  return (
    <S.Box>
      <div>
        با ثبت کسب‌وکار خود در دیوار از طرح‌های ویژه و امکانات حرفه‌ای دیوار
        برای کسب‌و‌کارها بهره‌مند شوید
      </div>

      <S.BoxItem href="#">
        <S.BoxChange>
          <S.BoxIcon>
            <img src={leftArrow} />
          </S.BoxIcon>
          <S.BoxTitle>
            <div>فروشگاه شما در دیوار</div>
            <div style={{ color: "#949494", fontSize: "13px" }}>
              فعالیت حرفه ای در بازار آنلاین
            </div>
          </S.BoxTitle>
        </S.BoxChange>

        <img src={b1} />
      </S.BoxItem>

      <S.BoxItem href="#">
        <S.BoxChange>
          <S.BoxIcon>
            <img src={leftArrow} />
          </S.BoxIcon>
          <S.BoxTitle>
            <div> آژانس املاک شما در دیوار </div>
            <div style={{ color: "#949494", fontSize: "13px" }}>
              امکانات تخصصی برای مدیران و مشاوران
            </div>
          </S.BoxTitle>
        </S.BoxChange>

        <img src={b2} />
      </S.BoxItem>

      <S.BoxItem href="#">
        <S.BoxChange>
          <S.BoxIcon>
            <img src={leftArrow} />
          </S.BoxIcon>
          <S.BoxTitle>
            <div> نماشگاه اتومبیل شما در دیوار </div>
            <div style={{ color: "#949494", fontSize: "13px" }}>
              فعالیت حرفه ای در بازار آنلاین خودرو
            </div>
          </S.BoxTitle>
        </S.BoxChange>

        <img src={b3} />
      </S.BoxItem>
    </S.Box>
  );
};

export default BusinessPage;
