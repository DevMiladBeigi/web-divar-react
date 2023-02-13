import styled from "styled-components";

export const Box = styled.div`
  width: 80%;
  height: auto;
  /* background-color: red; */
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  margin-left: 60px;
`;

export const A = styled.a`
  width: auto;
  height: auto;
  color: #727272;
  text-decoration: none;
  font-size: 12px;
  margin-top: 15px;
  margin-right: 15px;
  &:hover {
    color: #2b2b2b;
  }
  cursor: pointer;
`;

export const BoxIcon = styled.div`
  width: 100%;
  height: auto;
  /* background-color: red; */
  display: flex;
  justify-content: flex-start;
  margin-right: -50px;
  img{
    width: 17px;
    height: 17px;
    padding-right: 15px;
  }
`;
