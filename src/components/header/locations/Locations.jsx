import React, { useContext } from "react";
import { Button } from "./LocationStyle";
import location from "../../../assets/images/location.svg";
import { useState } from "react";
import LocationModalContainer from "../../locationModal/LocationModalContainer";

const Locations = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpenModal(!isOpenModal)}>
        <div> شهر </div>
        <div> 999 </div>
        <img src={location} alt="" />
      </Button>
      {isOpenModal ? (
        <LocationModalContainer
          isOpenModal={isOpenModal}
          setIsOpenModal={setIsOpenModal}
        />
      ) : null}
    </>
  );
};
export default Locations;
