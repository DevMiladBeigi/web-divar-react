import styled from "styled-components";

export const Box = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  /* background-color: red; */
  flex-direction: column;
`;

export const verticalLine = styled.div`
  width: 99%;
  height: 1px;
  background-color: #c0c0c0;
  position: fixed;
  top: 70px;
  z-index: -10;
`;
