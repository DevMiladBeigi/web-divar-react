import React from "react";
import * as S from "./NotepageStyle";
import notee from '../../../assets/images/notee.svg'
const NotePage = () => {
  return (
    <S.Box>
      <img src={notee} />
      <div>برای یادداشت گذاشتن روی آگهی‌ها می‌توانید از کادر یادداشت  در صفحهٔ آگهی استفاده کنید </div>
    </S.Box>
  );
};

export default NotePage;
