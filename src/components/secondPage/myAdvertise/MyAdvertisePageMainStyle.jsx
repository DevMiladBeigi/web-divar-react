import styled from "styled-components";

export const Box = styled.div`
  width: 50%;
  height: auto;
  /* background-color: #e9b4b4; */
  display: flex;
  position: absolute;
  top: 94px;
  left: 255px;
  justify-content: flex-end;
  /* text-align: left; */
`;

export const BoxImage = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  /* background-color: red; */
  border-radius: 6px;
  margin-left: 10px;
`;

export const BoxDescription = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  /* background-color: red; */
  flex-direction: column;
`;

export const BoxTitle = styled.div`
  width: 100%;
  height: auto;
  justify-content: space-between;
  display: flex;
  span{
    color: green;
  }
`;

export const BoxPrice = styled.div`
  width: 100%;
  height: auto;
  justify-content: space-between;
  display: flex;
  margin-top: 33px;
  span{

    font-size: 13px;
    color: #6b6b6b;
  }
`;

export const Button = styled.button`
  width: auto;
  height: 40px;
  border: solid 1px #f16363;
  color: #fc4141;
`;


export const VerticalLine=styled.div`
    
width: 830px;
height: 1px;
background-color: #cacaca;
position: absolute;
left: -17px;
top: 120px;
`