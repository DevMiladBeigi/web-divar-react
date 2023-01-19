import  { React,useEffect,useRef } from "react";
import { Box,BoxButton,ButtonAccept,ButtonCancel } from "./LocationModalStyleContainer";
import LocationModalHeader from './locationModalHeader/LocationModalHeader'
import { LocationGlobalStyles } from "./LocationModalGlobalStyle";
import LocationModalSearch from './locationModalSearch/LocationModalSearch'
import LocationModalCities from './locationModalCities/LocationModalCities'
const LocationModalContainer = ({isOpenModal,setIsOpenModal}) => {
  
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

  return isOpenModal && (
    <Box ref={menRef}>
      <LocationGlobalStyles/>
      <LocationModalHeader />
      <LocationModalSearch />
      <LocationModalCities />
      <BoxButton >
        <ButtonAccept>
          تایید
        </ButtonAccept>
        <ButtonCancel onClick={() => setIsOpenModal(!isOpenModal)}>
          انصراف
        </ButtonCancel>
      </BoxButton>
    </Box>
  );
};

export default LocationModalContainer;
