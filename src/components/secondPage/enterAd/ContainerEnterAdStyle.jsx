import styled from "styled-components";

export const Box = styled.div`
  width: 500px;
  height: auto;
  display: flex;
  flex-direction: column;
  /* background-color: red; */
  position: absolute;
  top: 100px;
  right: 550px;
  text-align: right;
`;

export const BoxTitle = styled.div`
  font-size: 16px;
  color: #c20e0e;
`;

export const BoxSelect = styled.div`
  font-size: 13px;
  color: #858585;
  margin-bottom: 30px;
  margin-top: 10px;
`;

export const BoxSingleMenu = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  /* background-color: red; */
  justify-content: space-between;
  margin-top: 13px;
  cursor: pointer;
`;

export const BoxTitleMenu = styled.div`
  width: auto;
  height: auto;
  display: flex;
  color: #333333;
  img {
    width: 20px;
    height: 20px;
    margin-left: 15px;
  }
`;

export const BoxIcon = styled.div`
  width: auto;
  height: auto;
  /* activeMenu === index */
  transition: 500ms;
  transform: ${(props) =>
    props.activeMenu === props.index ? "rotate(-90deg)" : "rotate(0)"};
  /* font-weight: ${(props) => props.isOpenModal && "500"}; */
  img {
    width: 15px;
    height: 15px;
  }
`;

export const HorizontalLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: #c4c4c4;
  margin-top: 13px;
`;

export const ReturnToAll = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: right;
  margin-top: 13px;
  cursor: pointer;

  img {
    width: 20px;
    height: 20px;
    align-self: center;
    margin-left: 30px;
  }
  div {
    color: #646464;
  }
`;

export const BoxSubMenu = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  /* background-color: #f0f0f0; */
  justify-content: right;
  /* margin-top: 13px; */
  cursor: pointer;
  padding: 6px;
  &:hover {
    background-color: #eeeeee;
  }
`;

export const BoxSubMenuIcon = styled.div`
  width: auto;
  height: auto;
  img {
    width: 12px;
    height: 12px;
    margin-left: 10px;
  }
`;

export const BoxTitleSubMenu = styled.div`
  width: auto;
  height: auto;
  display: flex;
  color: #646464;
  margin-right: 20px;
  font-size: 13px;
  align-self: center;
`;

export const HorizontalLineSubMenu = styled.div`
  width: 92.5%;
  height: 1px;
  background-color: #c4c4c4;
  /* margin-top: 13px; */
`;
