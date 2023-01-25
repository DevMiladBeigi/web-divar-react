import styled from "styled-components";
import Vazir from "../../../assets/fonts/Vazir.ttf";
export const Box = styled.div`
  @font-face {
    font-family: "Vazir";
    src: url(${Vazir});
  }
  /* top: 20%;
  right: 10%; */
  width: 488px;
  height: 600px;
  display: flex;
  text-align: right;
  /* background-color: red; */
  flex-direction: column;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #dfdcdc;
    border-radius: 50px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #afaaaa;
  }
  ::-webkit-scrollbar-track {
    background-color: white;
    margin-block: 5px;
  }
  /* margin-top: 50px; */
`;

export const Back = styled.div`
  width: 100%;
  height: 40px;
  display: flex;

  button {
    cursor: pointer;
    width: 100%;
    &:hover {
      background-color: white;
      div {
        font-weight: 500;
      }
    }
  }

  div {
    font-size: 18px;
    color: #292828de;
    margin-left: 280px;
  }
  img {
    width: 25px;
    height: 25px;
    margin-left: 10px;
  }
`;

export const BoxSelectCity = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: right;
  button {
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    width: 100%;
    &:hover {
      background-color: white;
      div {
        font-weight: 500;
      }
    }
  }
  img {
    width: 25px;
    height: 25px;
    /* margin-right: 150px; */
  }
  div {
    font-size: 18px;
    color: #292828de;
    margin-right: 30px;
  }
`;

export const HorizontalLine = styled.div`
  border-top: 2px solid #b8b5b5;
  width: 520px;
  margin-left: -35px;
`;

export const BoxInput = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: auto;
  padding-top: 10px;
  input {
    width: 20px;
    height: 20px;
    accent-color: #a62626;
  }
`;
