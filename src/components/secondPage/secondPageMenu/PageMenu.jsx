import React from "react";
import * as S from "./PageMenuStyle";
import UserDivar from "./userDivar/UserDivar";
import IdentityAccept from "../secondPageMenu/IdentityAccept/IdentityAccept";
import MyAdvertise from "../secondPageMenu/myAdvertise/MyAdvertise";
import Mark from "../secondPageMenu/mark/Mark";
import Prepayment from "../secondPageMenu/prepayment/Prepayment";
import Note from "../secondPageMenu/notes/Notes";
import RecentVisits from "../secondPageMenu/recentVisits/RecentVisits";
import Business from "../secondPageMenu/business/Business";
import Exit from '../secondPageMenu/exit/Exit'
import Fotter from '../secondPageMenu/footer/Footer'
const PageMenu = () => {
  return (
    <S.Box>
      <UserDivar />
      <IdentityAccept />
      <MyAdvertise />
      <Mark />
      <Prepayment />
      <Note />
      <RecentVisits />
      <Business />
      <Exit/>
      <Fotter/>
    </S.Box>
  );
};

export default PageMenu;
