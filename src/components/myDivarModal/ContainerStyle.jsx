const { default: styled } = require("styled-components");

export const Box = styled.div`
  width: 250px;
  height: auto;
  display: block;
  flex-direction: column;
  box-shadow: 0 0 3px 0 grey;
  z-index: 100;
  position: absolute;
  left: 260px;
  top: 50px;
  text-align: right;
  border-radius: 6px;
  /* padding-right: 30px;
  padding-top: 10px; */
  background-color: white;
`;
