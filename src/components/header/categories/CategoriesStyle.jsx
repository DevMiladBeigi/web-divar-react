import styled from "styled-components";
export const Button = styled.button`
  margin: 5px 10px 0 0;
  background-color: ${(props) => props.isOpenModal && "#f3f3f3"};
  img {
    width: 10px;
    height: 10px;
    margin-right: 7px;
  }
  &:hover {
    div {
      font-weight: ${(props) => props.isOpenModal && "500"};
    }
  }
  &:active {
    background-color: #dad9d9;
    transition: 200ms;
  }
  /* display: none; */
`;

export const Box = styled.div`
  width: 20px;
  height: 20px;
`;
