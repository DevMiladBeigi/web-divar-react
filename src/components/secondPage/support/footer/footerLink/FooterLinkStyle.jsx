import styled from "styled-components";
import support from "../../../../../assets/images/support.svg";
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
  color: #a62626;
  cursor: pointer;
  text-decoration: none;
`;

export const Button = styled.button`
  width: 55px;
  height: 55px;
  background-color: #a62626;
  position: fixed;
  right: 50px;
  top: 700px;
  border-radius: 100%;
  box-shadow: 0 8px 9px -4px rgb(166 38 38 / 24%),
    0 14px 16px 2px rgb(166 38 38 / 14%), 0 5px 20px 4px rgb(166 38 38 / 12%);

  display: flex;
  &:hover {
    box-shadow: none;
    background-color: #c42f2f;
    transform: translateY( 14px);

  }

  img {
    width: 45px;
    height: 45px;
    align-self: center;
    display: flex;
    transform: translate(-4px, -4px);
  }
`;
