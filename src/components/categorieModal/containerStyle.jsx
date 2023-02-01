import styled from "styled-components";

export const Box = styled.div`
  width: 1210px;
  height: 696px;
  display: flex;
  justify-content: flex-end;
  position: absolute;
  left: 530px;
  top: 60px;
  z-index: 1000000;
  /* background-color: red; */
  overflow: auto;
  /* text-align: left; */
`;

export const Box2 = styled.div`
  /* position: absolute; */
  width: 800px;
  top: 200px;
  left: 300px;
  display: flex;
  overflow: auto;
  height: 500px;
  background-color: green;
  margin: 10px;
`;

export const VerticalLine = styled.div`
  height: 600px;
  width: 2px;
  background-color: #5e5e5f8e;
  margin-top: 50px;
  position: absolute;
  right: 240px;
`;

export const AllCategory2 = styled.a`
  width: auto;
  height: 40px;
  padding-left: 10px;
  padding-right: 10px;
  border: 2px solid #adadad8e;
  text-decoration: none;
  display: flex;
  color: #5e5e5f8e;
  border-radius: 6px;
  position: absolute;
  top: 620px;
  left: 30px;
  &:hover {
    background-color: #d6d6d68e;
    transition: 500ms;
  }
  cursor: pointer;

  span {
    margin: 8px;
  }
`;
