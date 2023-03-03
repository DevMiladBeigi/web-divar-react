import styled from "styled-components";

export const Backdrop = styled.div`
  transition: 1s;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* display: none; */
  background: rgba(43, 43, 43, 0.6);
  z-index: 1;
`;

export const Box = styled.div`
  width: 400px;
  height: 600px;
  background-color: white;
  z-index: 2;
  display: flex;
  position: absolute;
  top: 100px;
  right: 50px;
  border-radius: 15px;
  justify-content: right;
  flex-direction: column;
`;

export const BoxHeader = styled.div`
  width: 100%;
  height: 55px;
  display: flex;
  justify-content: right;
  align-self: center;
  text-align: center;
  div {
    margin-top: 15px;
  }

  button {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    align-self: center;
    margin-left: 120px;

    img {
      width: 25px;
      height: 25px;
      margin-right: 8px;
    }
  }
`;

export const VerticalLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: #acacac;
`;

export const BoxFamilyName = styled.div`
  width: 90%;
  height: 150px;
  /* background-color: red; */
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  text-align: right;
  div {
    margin-top: 40px;
  }
  input {
    padding-right: 15px;
    padding-top: 5px;
    padding-bottom: 5px;
    text-align: right;
    width: 90%;
    height: 55px;
    background-color: #ffffff;
    margin-top: 15px;
    border-radius: 4px;
    border: 1px solid #acacac;
    outline: none;
    margin-left: 30px;
    &:focus {
      border: 2px solid #275df3;
    }
  }
`;

export const BoxPhoneNumber = styled.div`
  width: 90%;
  height: 150px;
  /* background-color: red; */
  margin-top: 35px;
  display: flex;
  flex-direction: column;
  text-align: right;
  div {
    margin-top: 40px;
  }
  input {
    padding-left: 50px;
    padding-top: 5px;
    padding-bottom: 5px;
    width: 80%;
    height: 25px;
    background-color: #ffffff;
    margin-top: 15px;
    border-radius: 4px;
    border: 1px solid #acacac;
    outline: none;
    margin-left: 30px;
    &:focus {
      border: 2px solid #275df3;
    }
  }
`;

export const BoxCountryCode = styled.div`
  width: 40px;
  height: 20px;
  background-color: #e7e7e7;
  position: absolute;
  top: 310px;
  left: 30px;
  border-radius: 100px;
  font-size: 13px;
  text-align: center;
  margin-left: 5px;
`;

export const SubmitButton = styled.button`
  width: 86%;
  height: 30px;
  background-color: #a62626;
  padding: 20px;
  margin-left: 30px;
  color: white;
  font-size: 15px;

  &:hover {
    background-color: #bd2c2c;
  }
`;
