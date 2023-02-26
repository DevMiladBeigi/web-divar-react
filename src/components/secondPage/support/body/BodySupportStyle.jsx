import styled from "styled-components";
import { Link } from "react-router-dom";

export const Box = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  /* background-color: #d19393; */
  /* justify-content: space-between; */
  margin-top: 120px;
  flex-wrap: wrap;
  justify-content: right;
`;

export const BoxItem = styled.div`
  width: auto;
  height: auto;
  /* background-color: #e7e7e7; */
  display: flex;
  flex-direction: column;
  /* margin-left: 200px; */
  img {
    width: 80px;
    height: 80px;
  }
  margin-left: 100px;
  margin-top: 30px;
`;

export const LinkMoreTag = styled(Link)`
  color: #a62626;
  font-size: 14px;
  text-decoration: none;
  margin-bottom: 5px;
`;

export const Verticalline = styled.div`
  width: 100%;
  height: 1px;
  background-color: #a0a0a0;
  margin-top: 50px;
`;
