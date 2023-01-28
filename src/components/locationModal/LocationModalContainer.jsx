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
const checkList = [
  { id: 1, name: "تهران", check: false },
  { id: 2, name: "اراک", check: false },
  { id: 3, name: "مشهد", check: false },
  { id: 4, name: "شیراز", check: false },
];
const LocationModalContainer = ({ isOpenModal, setIsOpenModal }) => {
  const handlershowComponent = () => {
    setShowComponent(!showComponent);
  };
  const [showComponent, setShowComponent] = useState(true);
  const [checkboxs, setCheckboxs] = useState([]);

  useEffect(() => {
    setCheckboxs(checkList);
  }, []);

  const handleChange = (e) => {
    const { name, checked } = e.target;
    if (name === "allSelect") {
      let tempCity = checkboxs.map((item) => {
        return { ...item, isChecked: checked };
      });
      setCheckboxs(tempCity);
    } else {
      let tempCity = checkboxs.map((item) =>
        item.name === name ? { ...item, isChecked: checked } : item
      );
      setCheckboxs(tempCity);
    }
  };

  const disableButton = () => {
    if (checkboxs.filter((item) => item?.isChecked == true).length >= 1) {
      return false;
    } else {
      return true;
    }
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
          checkboxs={checkboxs}
          handleChange={handleChange}
        />
        <LocationModalSearch />

        {showComponent ? (
          <LocationModalCities handlershowComponent={handlershowComponent} />
        ) : (
          <LocationModalSelectCity
            handleChange={handleChange}
            checkboxs={checkboxs}
            handlershowComponent={handlershowComponent}
          />
        )}

        <BoxButton>
          <ButtonAccept disabled={disableButton()}>تایید</ButtonAccept>
          <ButtonCancel onClick={() => setIsOpenModal(!isOpenModal)}>
            انصراف
          </ButtonCancel>
        </BoxButton>
      </Box>
    )
  );
};

export default LocationModalContainer;
