import React, { useContext } from "react";
import * as S from "./NoteStyle";
import note from "../../../assets/images/note.svg";
import {CategoryContext} from "../../context/categoryContext";
const Notes = () => {
  const { Show } = useContext(CategoryContext);

  return (
    <>
      <S.Box>
        <S.TagLink onClick={() => Show()} to="/my-note">
          یادداشت ها
        </S.TagLink>
        <img src={note} />
      </S.Box>
      <S.VerticalLine></S.VerticalLine>
    </>
  );
};

export default Notes;
