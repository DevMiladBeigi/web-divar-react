import React from "react";
import * as S from "./HeaderSupportStyle";
import close from "../../../../assets/images/close.svg";
import { useState } from "react";
const HeaderSupport = () => {
  const [query, setQuery] = useState("");

  return (
    <S.Box>
      <div>چطور می‌توانیم کمکتان کنیم؟</div>
      <S.BoxInput
        value={query}
        type="text"
        onChange={(e) => setQuery(e.target.value)}
        placeholder="جستجو در مقالات راهنما"
      />
      <S.Button type="button" query={query} onClick={() => setQuery("")}>
        <img src={close} />
      </S.Button>
      <S.BoxModal query={query}>{query}</S.BoxModal>
    </S.Box>
  );
};
export default HeaderSupport;
