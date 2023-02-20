import styled from "styled-components";
import { Link } from "react-router-dom";

export const Box = styled.div`
  position: absolute;
`;

export const TagLink = styled(Link)`
  width: 60px;
  /* position: absolute; */
  height: auto;
  color: #727272;
  font-size: 14px;
  margin-top: -15px;
  text-decoration: none;
  display: flex;
  /* align-items: center; */
  justify-content: center;
  align-self: center;
  padding: 8px;
  border-radius: 6px;
  &:hover {
    background-color: #e7e7e7;
  }
  img {
    width: 18px;
    height: 18px;
    margin-top: 3px;
    margin-left: 6px;
  }
`;
