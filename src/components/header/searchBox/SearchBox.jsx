import React, { useContext, useState } from "react";
import { Search, ImageIcon, FormSearch, Button } from "./SearchBoxStyle";
import searchIcon from "../../../assets/images/searchIcon.svg";
import close from "../../../assets/images/close.svg";
import Container from "../../searchModal/Container";
import {CategoryContext} from '../../context/categoryContext'
const SearchBox = () => {
  const { isShow } = useContext(CategoryContext)

  const [query, setQuery] = useState("");
  const [openModal, setOpenModal] = useState(false);

  return (
    <div div style={isShow ?{display:'none'}:null}>
      <FormSearch 
        style={
          openModal
            ? { background: "white", boxShadow: "0 0 4px 0 grey" }
            : null
        }
        onClick={() => setOpenModal(true)}
      >
        <Button
          style={query.length > 0 ? { display: "flex" } : { display: "none" }}
          onClick={()=>setQuery('')}
        >
          <ImageIcon src={close} />
        </Button>
        <Search
          style={openModal ? { background: "white" } : null}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          placeholder="جستجو در"
        ></Search>
        <ImageIcon src={searchIcon} />
      </FormSearch>
      {openModal ? (
        <Container query={query} setOpenModal={setOpenModal} />
      ) : null}
    </div>
  );
};
export default SearchBox;
