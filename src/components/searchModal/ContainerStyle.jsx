import styled from "styled-components";

export const Box = styled.div`
  width: 468px;
  height: auto;
  display: flex;
  z-index: 1000;
  position: absolute;
  left: 787px;
  top: -16px;
  background-color: white;
  justify-content: flex-end;
  border-radius: 6px;
  box-shadow: 0 0 4px 0 grey;

  div {
    margin-right: 30px;
    padding: 12px;
    color: #8f8f8f;
  }
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
  z-index: 10;
`;
