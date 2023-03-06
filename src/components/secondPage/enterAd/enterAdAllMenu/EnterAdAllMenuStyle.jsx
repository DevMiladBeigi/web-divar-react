import styled from "styled-components";

export const BoxSingleMenu = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  /* background-color: red; */
  justify-content: space-between;
  margin-top: 13px;
  cursor: pointer;
`;

export const BoxTitleMenu = styled.div`
  width: auto;
  height: auto;
  display: flex;
  color: #646464;
  img {
    width: 20px;
    height: 20px;
    margin-left: 15px;
  }
`;

export const BoxIcon = styled.div`
  width: auto;
  height: auto;
  img {
    width: 15px;
    height: 15px;
  }
`;

export const HorizontalLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: #c4c4c4;
  margin-top: 13px;
`;
