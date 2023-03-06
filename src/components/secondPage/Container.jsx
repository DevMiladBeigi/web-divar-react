import React, { useContext } from "react";
import * as S from "./ContainerStyle";
import PageHeader from "./secondPageHeader/PageHeader";
import PageMenu from "./secondPageMenu/PageMenu";
import IdentityAcceptPageMain from "./IdentityAcceptPage/IdentityAcceptPageMain";
import MarkPage from "./markPage/MarkPage";
import MyAdvertisePageMain from "./myAdvertise/MyAdvertisePageMain";
import NotePage from "./note/NotePage";
import PrepaymentPage from "./prepayment/PrepaymentPage";
import RecentVisitsPage from "./recentVisits/RecentVisitsPage";
import BusinessPage from "./business/BusinessPage";
import ChatPage from "./chat/ChatPage";
import ContainerSupport from "./support/Container";
import { Route, Routes } from "react-router-dom";
import { CategoryContext } from "../context/categoryContext";
import ContainerEnterAd from "./enterAd/ContainerEnterAd";

const Container = () => {
  const { showChat } = useContext(CategoryContext);

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
        {/* <Route path="chat" element={<ChatPage />}></Route> */}
        <Route path="support" element={<ContainerSupport />}></Route>
        <Route path="new" element={<ContainerEnterAd />}></Route>
      </Routes>
      <PageHeader />
      {showChat ? null : <PageMenu />}
    </S.Box>
  );
};

export default Container;
