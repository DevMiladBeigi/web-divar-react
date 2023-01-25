import styled from "styled-components";

export const Box = styled.div`
  width: 488px;
  height: 600px;
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  text-align: right;
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
`;

export const BoxCity = styled.div`
  margin-top: 10px;
  margin-left: -8px;
  width: 488px;
  height: 40px;
  display: flex;
  justify-content: right;
  /* background-color: red; */
  span {
    font-size: 18px;
    margin-bottom: 10px;
    width: inherit;
    color: #4b4b4b;
    &:hover {
      font-weight: 500;
    }
    text-align: right;
  }
  img {
    width: 15px;
    height: 15px;

    margin-bottom: 10px;
  }
  border-bottom: 2px solid #cccbcb;
  button {
    width: 470px;
    height: 32px;
    background-color: white;
    &:hover {
      background-color: white;
    }

    justify-content: right;
  }
`;

export const HorizontalLine = styled.div`
  border-top: 2px solid #b8b5b5;
  width: 558px;
  margin-left: -35px;
`;
