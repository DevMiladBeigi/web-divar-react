import React, { useState } from "react";

export const CategoryContext = React.createContext({});

const CategoryProvide = ({ children }) => {
  const [isHome, setIsHome] = useState(true);
  const [isCar, setIsCar] = useState(false);
  const [isDigital, setisDigital] = useState(false);
  const [isKitchen, setisKitchen] = useState(false);
  const [isShow, setIsShow] = useState(false);

  const Show = () => {
    setIsShow(true);
  };

  const ShowHome = () => {
    setIsHome(true);
    setIsCar(false);
    setisDigital(false);
    setisKitchen(false);
  };

  const ShowCar = () => {
    setIsCar(true);
    setIsHome(false);
    setisDigital(false);
    setisKitchen(false);
  };

  const ShowDigital = () => {
    setIsCar(false);
    setIsHome(false);
    setisDigital(true);
    setisKitchen(false);
  };

  const ShowKitchen = () => {
    setIsCar(false);
    setIsHome(false);
    setisDigital(false);
    setisKitchen(true);
  };

  return (
    <CategoryContext.Provider
      value={{
        isHome,
        ShowHome,
        ShowCar,
        isCar,
        setIsCar,
        ShowKitchen,
        ShowDigital,
        isKitchen,
        setisKitchen,
        isDigital,
        setisDigital,
        isShow,
        Show,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryProvide;
