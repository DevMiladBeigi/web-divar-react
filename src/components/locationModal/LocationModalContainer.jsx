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
  const handlershowComponent = () => {
    setShowComponent(!showComponent);
  };
  const [showComponent, setShowComponent] = useState(true);
  const checkList = [
    { id: 1, name: "تهران", check: false },
    { id: 2, name: "اراک", check: false },
    { id: 3, name: "مشهد", check: false },
    { id: 4, name: "شیراز", check: false },
  ];
  const [checked, setChecked] = useState([]);

  const removeAllCity = () => {
    setChecked([]);
  };

  const filterHandler = (value) => {
    setChecked((oldValues) => {
      return oldValues.filter((item) => item !== value);
    });
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
        <LocationModalHeader
          checked={checked}
          removeAllCity={removeAllCity}
          filterHandler={filterHandler}
        />
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
