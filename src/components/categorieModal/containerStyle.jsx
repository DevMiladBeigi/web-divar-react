import styled from "styled-components";

export const Box = styled.div`
  width: 1210px;
  border-radius: 6px;
  height: 550px;
  display: flex;
  justify-content: flex-end;
  position: absolute;
  left: 130px;
  top:0;
  z-index: 10;
  /* background-color: red; */
  overflow: auto;
  /* text-align: left; */
  background-color: white;
  box-shadow: 0 0 10px 0 grey;
`;



export const VerticalLine = styled.div`
  height: 460px;
  width: 1px;
  background-color: #5e5e5f8e;
  margin-top: 50px;
  position: absolute;
  right: 220px;
`;


export const Backdrop = styled.div`
transition: 1s;
  position: fixed;
  top: 70px;
  left: 0;
  width: 100%;
  height: 100%;
  /* display: none; */
  background: rgba(100, 100, 100, 0.5);
  /* z-index: 1; */
`;
