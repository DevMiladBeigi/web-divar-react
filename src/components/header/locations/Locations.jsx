import React from "react";
import Button from "./LocationStyle";
import location from "../../../assets/images/location.svg";

const Locations = () => {
  return (
    <>
      <Button>
        <div> شهر </div>
        <div> 999 </div>
        <img src={location} alt="" />
      </Button>
    </>
  );
};
export default Locations;
