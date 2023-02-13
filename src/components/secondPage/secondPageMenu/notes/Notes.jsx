import React from "react";
import * as S from "./NoteStyle";
import note from "../../../../assets/images/note.svg";
const Notes = () => {
  return (
    <>
    <S.Box>
      <S.A href="#"> یادداشت ها</S.A>
      <img src={note}/>
    
    </S.Box>
    </>
  );
};

export default Notes;
