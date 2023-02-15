import styled from "styled-components";
import { Link } from "react-router-dom";

export const Box = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-end;

  img {
    width: 20px;
    height: 20px;
    margin-left: 10px;
    margin-top: 15px;
    margin-right: 15px;
  }
`;

export const TagLink = styled(Link)`
  width: 100%;
  height: 40px;
  color: #727272;
  font-size: 14px;
  margin-top: 15px;
  text-decoration: none;
  &:active {
    color: #727272;
  }

  &:visited {
    color: #727272;
  }
`;
