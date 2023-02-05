import styled from "styled-components";

export const aTitle = styled.a`
  font-size: 15px;
  color: #6b6b6b;
  cursor: pointer;
  margin: 30px 10px 8px 0;
  width: 50px;
  height: auto;
  &:hover {
    color: #a62626;
    transition:  500ms ;

  }
`;

export const A = styled.a`
  font-size: 12px;
  color: #8f8f8f;
  cursor: pointer;
  margin: 0 10px 0 0;
  width: auto;
  height: auto;
  &:hover {
    color: #a62626;
    transition:  500ms ;
    
  }
`;

export const Image = styled.img`
  width: 280px;
  height: 200px;
  position: absolute;
  top: 200px;
  right: 700px;
`;



export const AllCategory2 = styled.a`
  width: auto;
  height: 30px;
  padding-left: 10px;
  padding-right: 10px;
  border: 2px solid #adadad8e;
  text-decoration: none;
  display: flex;
  color: #5e5e5f8e;
  border-radius: 6px;
  position: absolute;
  top: 460px;
  left: 30px;
  &:hover {
    background-color: #d6d6d68e;
    transition: 500ms;
  }
  cursor: pointer;

  span {
    font-size: 13px;
    margin-top: 5px;
  }
`;