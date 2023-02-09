import styled from "styled-components";

export const Box = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  margin-top: 15px;
  margin-left: -15px;
`;

export const BoxTitle = styled.div`
  color: #646464;
  font-size: 14px;
  display: flex;
  justify-content: flex-end;
  img {
    width: 20px;
    height: 20px;
    margin-left: 10px;
  }
`;

export const BoxNumber = styled.div`
  color: #9e9e9e;
  font-size: 12px;
  margin-right: 30px;
  margin-top: 7px;
`;

export const VerticalLine = styled.div`
  width: 250px;
  height: 1px;
  background-color: #b4b4b4;
  margin-top: 10px;
  margin-left: 15px;

`;
