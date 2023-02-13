import * as S from "./ContainerStyle";
import UserDivar from "./userDivar/UserDivar";
import IdentityAccept from "./IdentityAccept/IdentityAccept";
import MyAdvertise from "./myAdvertise/MyAdvertise";
import Mark from "./mark/Mark";
import Notes from "./notes/Notes";
import Prepayment from "./prepayment/Prepayment";
import RecentVisits from "./recentVisits/RecentVisits";
import Business from "./business/Business";
import Exit from "./exit/Exit";

const Container = () => {
  return (
    <S.Box>
      <UserDivar />
      <IdentityAccept />
      <MyAdvertise />
      <Mark />
      <Notes />
      <Prepayment />
      <RecentVisits />
      <Business />
      <Exit />
    </S.Box>
  );
};

export default Container;
