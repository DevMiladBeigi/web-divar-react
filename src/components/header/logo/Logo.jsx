import React from "react";
import { Image, Line } from "./LogoStyle";
import logo from "../../../assets/images/logo.svg";
const Logo = () => {
  return (
    <>
    <Line></Line>
      <a href="www.divar.ir">
        <Image alt="صفحه اصلی" src={logo} />
      </a>
      
    </>
  );
};

export default Logo;
