import styled from "styled-components";
import { Link } from "react-router-dom";

export const TagLink = styled(Link)`
  width: 80px;
  height: 40px;
  font-size: 14px;
  margin-top: 8px;
  margin-right: 30px;
  text-decoration: none;
  background-color: #a62626;
  border-radius: 6px;
  text-align: center;

  div {
    color: #ececec;
    margin-top: 7px;
  }
`;
