import styled from "styled-components";
import { Link } from "react-router-dom";

export const TagLink = styled(Link)`
  width: 80px;
  border-radius: 6px;
  height: 40px;
  color: #727272;
  font-size: 14px;
  margin-top: 7px;
  text-decoration: none;
  /* background-color: red; */
  display: flex;
  /* justify-content: center; */

  div {
    align-self: center;
    margin-left: 14px;
  }

  &:hover {
    background-color: #e6e6e6;
  }
`;
