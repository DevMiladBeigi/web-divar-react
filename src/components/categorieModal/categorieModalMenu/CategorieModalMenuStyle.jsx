import styled from "styled-components";

export const BoxMenu = styled.div`
  position: absolute;
  margin-top: 48px;
  height: auto;
  width: 20%;
  /* background-color: green; */
  display: flex;
  /* justify-content: flex-start; */
  flex-direction: column;
  img {
    width: 17px;
    height: 17px;
    margin-right: 15px;
    margin-top: 10px;
  }
  span {
    margin: 8px;
  }
  overflow: auto;
`;

export const AllCategory = styled.a`
  width: auto;
  height: 40px;
  border: 2px solid #adadad8e;
  text-decoration: none;
  display: flex;
  text-align: center;
  justify-content: flex-end;
  color: #5e5e5f8e;
  margin-left: 15px;
  margin-right: 15px;
  border-radius: 6px;
  &:hover {
    background-color: #d6d6d68e;
    transition: 500ms;
  }
  cursor: pointer;
`;

export const A = styled.a`
  width: auto;
  height: 40px;
  display: flex;
  margin-left: 17px;
  margin-top: 10px;
  border-radius: 6px;
  justify-content: space-between;
  span {
    display: flex;
    color: #5e5e5f8e;

    text-align: center;
    img {
      width: 20px;
      height: 20px;
      margin-right: 5px;
      margin-top: 0;
    }
  }
  img {
    width: 15px;
    height: 15px;
    margin-left: 10px;
    margin-top: 10px;
  }
  &:hover {
    background-color: #d6d6d68e;
    transition: 500ms;
  }
  cursor: pointer;
`;
