import React from "react";
import { Box } from "./LocationModalStyleContainer";
import LocationModalHeader from './locationModalHeader/LocationModalHeader'
import { LocationGlobalStyles } from "./LocationModalGlobalStyle";
import LocationModalSearch from './locationModalSearch/LocationModalSearch'
import LocationModalCities from './locationModalCities/LocationModalCities'
const LocationModalContainer = () => {
  return (
    <Box>
      <LocationGlobalStyles/>
      <LocationModalHeader />
      <LocationModalSearch/>
      <LocationModalCities/>
    </Box>
  );
};

export default LocationModalContainer;
