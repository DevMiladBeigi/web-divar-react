import styled from "styled-components";

export const Box = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  div {
    font-size: 20px;
    color: #7e7e7e;
    margin-left: 20px;
  }
  margin-top: 150px;
  margin-bottom: 20px;
  align-items: baseline;
`;

export const BoxAboutUs = styled.div`
  width: 60%;
  height: auto;
  display: flex;
  justify-content: right;

  a {
    font-size: 10px;
    color: #a5a5a5;
    text-decoration: none;
    display: flex;
    align-self: center;
  }
`;

export const BoxSocial = styled.div`
  width: 40%;
  height: auto;
  display: flex;
  /* background-color: #c58181; */
  img {
    margin-right: 20px;
    width: 18px;
    height: 18px;
  }
`;

export const HorizontalLine = styled.div`
  width: 1px;
  height: 25px;
  background-color: #cecece;
  margin-right: 10px;
  display: flex;
`;
