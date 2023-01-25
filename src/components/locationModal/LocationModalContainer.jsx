import { React, useEffect, useRef, useState } from "react";
import {
  Box,
  BoxButton,
  ButtonAccept,
  ButtonCancel,
} from "./LocationModalStyleContainer";
import LocationModalHeader from "./locationModalHeader/LocationModalHeader";
import { LocationGlobalStyles } from "./LocationModalGlobalStyle";
import LocationModalSearch from "./locationModalSearch/LocationModalSearch";
import LocationModalCities from "./locationModalCities/LocationModalCities";
import LocationModalSelectCity from "./locationModalSelectCity/LocationModalSelectCity";
const LocationModalContainer = ({ isOpenModal, setIsOpenModal }) => {
  const [showComponent, setShowComponent] = useState(true);
  const checkList = ["اراک", "محلات", "شازند", "خمین"];
  const [checked, setChecked] = useState([]);
  const handlershowComponent = () => {
    setShowComponent(!showComponent);
  };
  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  let menRef = useRef();
  useEffect(() => {
    let handler = (event) => {
      if (!menRef.current.contains(event.target)) {
        setIsOpenModal(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    isOpenModal && (
      <Box ref={menRef}>
        <LocationGlobalStyles />
        <LocationModalHeader checked={checked} />
        <LocationModalSearch />

        {showComponent ? (
          <LocationModalCities handlershowComponent={handlershowComponent} />
        ) : (
          <LocationModalSelectCity
            handleCheck={handleCheck}
            checkList={checkList}
            handlershowComponent={handlershowComponent}
          />
        )}

        <BoxButton>
          <ButtonAccept>تایید</ButtonAccept>
          <ButtonCancel onClick={() => setIsOpenModal(!isOpenModal)}>
            انصراف
          </ButtonCancel>
        </BoxButton>
      </Box>
    )
  );
};

export default LocationModalContainer;
