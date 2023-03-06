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

export const ReturnToAll = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: right;
  margin-top: 13px;
  cursor: pointer;

  img {
    width: 20px;
    height: 20px;
    align-self: center;
    margin-left: 30px;
  }
  div{
    color: #646464;
  }
`;
