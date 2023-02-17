import React from "react";
import * as S from "./ContainerStyle";
import PageHeader from "./secondPageHeader/PageHeader";
import PageMenu from "./secondPageMenu/PageMenu";
import IdentityAcceptPageMain from "./IdentityAcceptPage/IdentityAcceptPageMain";
import MarkPage from "./markPage/MarkPage";
import MyAdvertisePageMain from "./myAdvertise/MyAdvertisePageMain";
import NotePage from "./note/NotePage";
import PrepaymentPage from './prepayment/PrepaymentPage'
import RecentVisitsPage from './recentVisits/RecentVisitsPage'
import BusinessPage from './business/BusinessPage'
import { Route, Routes } from "react-router-dom";

const Container = () => {
  return (
    <S.Box>
      <Routes>
        <Route
          path="identity-accept"
          element={<IdentityAcceptPageMain />}
        ></Route>
        <Route path="my-Advertise" element={<MyAdvertisePageMain />}></Route>
        <Route path="mark" element={<MarkPage />}></Route>
        <Route path="my-note" element={<NotePage />}></Route>
        <Route path="prepayment" element={<PrepaymentPage />}></Route>
        <Route path="recent-visits" element={<RecentVisitsPage />}></Route>
        <Route path="business" element={<BusinessPage />}></Route>
      </Routes>
      <PageHeader />
      <PageMenu />
    </S.Box>
  );
};

export default Container;
