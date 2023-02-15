import styled from "styled-components";

export const Box = styled.div`
  width: 50%;
  height: auto;
  /* background-color: red; */
  display: flex;
  position: absolute;
  top: 100px;
  left: 250px;
  justify-content: center;
  flex-direction: column;
  img{
    width: 250px;
    height: 250px;
    margin-left: 300px;
  }
  div{
    font-size: 13px;
    color: #969696;
  }
  text-align: center;
`;
