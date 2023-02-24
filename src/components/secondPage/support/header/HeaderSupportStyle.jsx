import styled from "styled-components";
import searchIcon from "../../../../assets/images/searchIcon.svg";
export const Box = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 25px;
  /* background-color: red; */
  flex-direction: column;
  text-align: center;
  div {
    font-size: 18px;
  }
`;

export const BoxInput = styled.input`
  width: 50%;
  height: 35px;
  display: flex;
  position: absolute;
  left: 270px;
  top: 70px;
  border: 1px solid #c4c4c4;
  border-radius: 6px;
  outline: none;
  display: flex;
  text-align: right;
  background-image: url(${searchIcon});
  background-repeat: no-repeat;
  background-position: right;
  background-size: 30px;
  padding-right: 30px;
  &::placeholder {
    font-size: 15px;
  }

  &:focus {
    border: 2px solid #c53737;
  }
`;

export const BoxModal = styled.div`
  width: 50.2%;
  height: 38px;
  /* background-color: red; */
  border-radius: 6px;
  position: absolute;
  top: 115px;
  left: 270px;
  box-shadow: 1px 1px 10px 1px #c9c9c9;
  justify-content: right;
  background-image: url(${searchIcon});
  background-repeat: no-repeat;
  background-position: right;
  background-size: 25px;
  padding-right: 30px;
  display: ${(props) => (props.query.length > 0 ? "flex" : "none")};
`;

export const Button = styled.div`
  width: 25px;
  height: 25px;
  /* background-color: red; */
  cursor: pointer;
  img {
    width: 20px;
    height: 20px;
  }
  position: absolute;
  top: 80px;
  left: 280px;
  display: ${(props) => (props.query.length > 0 ? "flex" : "none")};

`;
