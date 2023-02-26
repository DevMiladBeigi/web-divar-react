import styled from "styled-components";

export const Box = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: right;
  text-align: right;
  text-align: flex-start;
  margin-top: 30px;
`;

export const BoxItem = styled.div`
  width: 24%;
  height: auto;
  display: flex;
  /* background-color: red; */
  margin-left: 80px;
`;

export const BoxTitleHeader = styled.div`
  width: auto;
  height: auto;
  font-size: 15px;
  color: #1a1a1a;

`;

export const BoxTitleBody = styled.div`
  width: auto;
  height: auto;
  font-size: 14px;
  color: #8a8a8a;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const BoxTitleFooter = styled.a`
  width: auto;
  height: auto;
  font-size: 13px;
  color: #A62626;
  cursor: pointer;
  text-decoration: none;
`;
