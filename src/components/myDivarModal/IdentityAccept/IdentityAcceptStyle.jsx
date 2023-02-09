import styled from "styled-components";

export const Box = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-end;
  &:hover {
    background-color: #eeeeee;
  }
  img {
    width: 20px;
    height: 20px;
    margin-left: 10px;
    margin-top: 15px;
    margin-right: 15px;
  }
  
`;

export const A = styled.a`
  width: 100%;
  height: 40px;
  color: #727272;
  text-decoration: none;
  font-size: 14px;
  margin-top: 15px;
  /* margin-right: 15px; */
`;

export const VerticalLine = styled.div`
  width: 90%;
  height: 1px;
  background-color: #b4b4b4;
  display: flex;
  margin-left: 12px;
`;
